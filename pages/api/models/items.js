//@ts-nocheck
const mongoose  = require('mongoose')
import dbConnect from '../../lib/dbConnect';
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    descrption: { type: String, required: true, unique: true },
    price : { type: Number, required: true},
    img : { type: String, required: true},
    seller : { type: String, required: true }
},
{
    collection: 'items'
})

const model = mongoose.models.Items || mongoose.model('Items', UserSchema)

module.exports = model