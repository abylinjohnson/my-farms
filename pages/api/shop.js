// @ts-nocheck
import dbConnect from '../lib/dbConnect';
import Items from './models/items'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
const JWT_SECRET = "ojdfbvpwurbb*(^%&B089y(&*T(#47"
async function handler(req, res){
    if(req.method === "POST"){
        await dbConnect();
        if(!req.body){
            res.status(404).end("Error")
            return
        }
        const item = {
            name: req.body.name,
            descrption: req.body.description,
            price: req.body.price,
            img: req.body.image,
            seller: jwtDecode(req.body.token).username

        }
        try{
            const tem = await Items.create(item);
            console.log("Created item")
            return res.json({status: 201, error: 'Item Created'})
        }catch(err){
            console.log(err);
            return res.json({status: 'error',error: err})
        }
        
    }
    else if(req.method === "GET"){
        await dbConnect();
        const items = await Items.find()
        return res.status(200).json({data:items})
    }   
}

export default handler;