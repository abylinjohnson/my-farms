// @ts-nocheck
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
        const {username,email, password: plaintextpass} = req.body
        const password = await bcrypt.hash(plaintextpass, 10)
        try{
            const user= await User.create({
                username,
                email,
                password
            });
            // const token = await jwt.sign({ 
            //     id: user._id, 
            //     username: user.username 
            //   }, JWT_SECRET)
            return res.json({status: 201, error: 'User Created'})
        }catch(err){
            if(err.code === 11000){
                return res.json({status: 'error', error: 'Username already taken'})
            }
            return res.json({status: 'error',error: err})
        }
        
    }
}

export default handler;