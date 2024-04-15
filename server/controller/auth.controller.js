import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import errorHandler from "../utills/error.js";
const signUp=async(req,res,next)=>{
  try{
    const {username,email,password}=req.body;
    if(!username || !email || !password || username==="" || email==="" || password==="")
    {
      next(errorHandler(400,"All Fields Are Required"))
    }
    const hashedPassword=await bcrypt.hashSync(password,10);
    const newUser=new user({
      username:username,
      email:email,
      password:hashedPassword
    });
    newUser.save();
    res.json("SignUp SuccessFull")
  }
  catch(error)
  {
    next(error);
  }

}
export default signUp;