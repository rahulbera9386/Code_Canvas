import express from "express";
import {config} from "dotenv"
const app=express();

config({path:"./config/config.env"})

app.listen(process.env.PORT,()=>{
  console.log(`Server Running On Port:${process.env.PORT}`)
})