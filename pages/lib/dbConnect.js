// @ts-nocheck
import mongoose from 'mongoose'


const MONGODB_URI = 'mongodb://localhost:27017/myfarms?retryWrites=true&w=majority'

async function dbConnect () {
  mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log('DB Connection Successfull!!!');
  })
  .catch((e)=>{
    console.log(e)
  });
}

export default dbConnect;