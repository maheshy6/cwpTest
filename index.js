import express from "express";
import mongoose from "mongoose"
import "dotenv/config"
import destinationRoute from "./routes/destination.route.js";
import userRoute from "./routes/user.route.js";
import tripRoute from "./routes/itinerary.route.js";
import db from "./mongodb.connection.js";

const app=express();

app.use(express.json())
app.use("/api",destinationRoute)
app.use("/api/users",userRoute)
app.use("/api/users/trips",tripRoute)

//MongoDb setup and express server connection
const port =process.env.PORT || 3000

app.listen(port,async(req,res)=>{
    await mongoose.connect(process.env.MONGODB_CLOUD_URL)
    console.log("connected to mongodb atlas")
    // await mongoose.connect(process.env.MONGODBURL)
    // console.log("Connected to MongoDb database")
    console.log(`Express server started at http://localhost:${port}`)
})