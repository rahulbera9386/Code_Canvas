import express from "express";
import {config} from "dotenv"
import dbConnection from "./database/dbConnection.js";
import authRoutes from "./routes/auth.route.js"


const app=express();



app.use(express.json());
config({path:"../.env"})


app.use("/api/auth",authRoutes)




dbConnection();



app.listen(process.env.PORT,()=>{
  console.log(`Server Running On Port:${process.env.PORT}`)
})