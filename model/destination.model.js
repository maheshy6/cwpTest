import { Schema,model } from "mongoose";
const destinationdata = new Schema({
    name:{type:String ,required:true},
    location:{type:String ,required:true},
    price:{type:Number ,required:true},
    rating:{type:Number },
    type:{type:String,required:true},
    style:{type:String},
    image:{type:String ,default:""}
})

const Destination = model("destination",destinationdata)
export default Destination

//https://cf.bstatic.com/xdata/images/hotel/square600/31204963.webp?k=f27ed7e8803d086d2e1e0a8cb3d2dc5950cbf7fed59adb02bc8db1354c2c1323&o=
//https://cf.bstatic.com/xdata/images/hotel/square600/328756679.webp?k=354086d82f04b3ad4a0e64be9b8aaf84b85d7a2d96d1c46127fc9b762909ad1f&o=