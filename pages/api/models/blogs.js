//@ts-nocheck
const mongoose  = require('mongoose')
import dbConnect from '../../lib/dbConnect';
const UserSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    descrption: { type: String, required: true, unique: true },
    img : { type: String, required: true},
    author : { type: String, required: true }
},
{
    collection: 'blogs'
})

const model = mongoose.models.Blogs || mongoose.model('Blogs', UserSchema)

module.exports = model