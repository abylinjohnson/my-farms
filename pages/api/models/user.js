//@ts-nocheck
const mongoose  = require('mongoose')
import dbConnect from '../../lib/dbConnect';
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true,},
},
{
    collection: 'users'
})

const model = mongoose.models.Users || mongoose.model('Users', UserSchema)

module.exports = model