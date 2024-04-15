import express from "express";
import {config} from "dotenv"
import dbConnection from "./database/dbConnection.js";
import authRoutes from "./routes/auth.route.js"


const app=express();



app.use(express.json());
config({path:"../.env"})


app.use("/api/auth",authRoutes)

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "Internal Servar Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})


dbConnection();



app.listen(process.env.PORT,()=>{
  console.log(`Server Running On Port:${process.env.PORT}`)
})