//@ts-nocheck
const mongoose  = require('mongoose')
import dbConnect from '../../lib/dbConnect';
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    items: [{}]
},
{
    collection: 'cart'
})

const model = mongoose.models.Cart || mongoose.model('Cart', UserSchema)

module.exports = model