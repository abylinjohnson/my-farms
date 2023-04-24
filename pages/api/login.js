//@ts-nocheck
import dbConnect from '../lib/dbConnect';
import User from './models/user'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "ojdfbvpwurbb*(^%&B089y(&*T(#47"
async function handler(req, res){
    if(req.method === "POST"){
        await dbConnect();
        if(!req.body){
            res.status(404).end("Error")
            return
        }
        console.log(req.body);
        const { username, password } = req.body;
        const user = await User.findOne({username}).lean()
        if(!user){
            return res.json({status: 'error', error: 'invalid username/password'})
        }
        if(await bcrypt.compare(password, user.password)){
            const token = await jwt.sign({ 
                id: user._id, 
                username: user.username 
              }, JWT_SECRET)
              console.log(token);
              return res.json({status: 200, token: token})
        }
        return res.json({status: 'error', error: 'invalid username/password'})
        // const {username,email, password: plaintextpass} = req.body
        // const password = await bcrypt.hash(plaintextpass, 10)
        // try{
        //     const response = await User.create({
        //         username,
        //         email,
        //         password
        //     });
        // }catch(err){
        //     if(err.code === 11000){
        //         return res.json({status: 'error', error: 'Username already taken'})
        //     }
        //     return res.json({status: 'error',error: "An error Occured"})
        // }
        // res.status(201).json({message: 'User Created'});
    }
}

export default handler;