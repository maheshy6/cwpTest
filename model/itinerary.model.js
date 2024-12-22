import { Schema,model } from "mongoose";
const tripdata = new Schema({
    // username:{ type: Schema.Types.ObjectId, ref: "user", required: true },
    username:{ type: String, required: true },
    email:{type:String ,required:true},
    destination:{type:String ,required:true},
    startDate:{type:String,required:true},
    budget:{type:Number ,default:""}
})

const Trip = model("trip",tripdata)
export default Trip