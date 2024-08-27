import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";

import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })

    app.on("error",(error) => {
        console.log("Err: ",error)
        throw error
    })
})
.catch((err) => {
    console.log("MONGODB Connect Failed",err)
})