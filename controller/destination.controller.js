import Destination from "../model/destination.model.js";

//add new Destination
const addDestination=async(req,res)=>{
    const {name,location,price,rating,type,style,image}=req.body
    try {
        const newDes = await Destination({
            name,location,price,rating,type,style,image
        })
        await newDes.save()
        res.status(200).json({message:"Destination added successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Destination not added"})
    }
}

//Get all Destination
const getDestination=async(req,res)=>{
    try {
        const getDes = await Destination.find()
        res.status(200).json(getDes)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Destination not found"})
    }
}

export {addDestination , getDestination}



