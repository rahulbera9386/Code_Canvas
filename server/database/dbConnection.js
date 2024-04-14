import mongoose from "mongoose";

const dbConnection=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL,{dbName:"Blog"});
    console.log("Database Connected")
  }
  catch(err)
  {
    console.log(`Database Not Connected:${err}`)
  }
  
}
export default dbConnection;