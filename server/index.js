import express from "express";
import {config} from "dotenv"
import dbConnection from "./database/dbConnection.js";

const app=express();

config({path:"../.env"})

dbConnection();
app.listen(process.env.PORT,()=>{
  console.log(`Server Running On Port:${process.env.PORT}`)
})