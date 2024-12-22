import "dotenv/config"
import mongoose from "mongoose"

const db = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_CLOUD_URL)
        console.log("connected to mongodb atlas")
    } 
    catch (error) {
        console.log(error.message)
    }
}
export default db