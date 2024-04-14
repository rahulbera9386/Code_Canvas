import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
const signUp=async(req,res)=>{
  try{
    const {username,email,password}=req.body;
    if(!username || !email || !password || username==="" || email==="" || password==="")
    {
      return response.status(400).json("All Fields Are Required")
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
  catch(e)
  {
    res.status(500).json({message:e.message})
  }

}
export default signUp;