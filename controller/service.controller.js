import Service from "../model/servises.model.js"

//add new Destination
const addService=async(req,res)=>{
    const {name,location,price,rating,type,style,image}=req.body
    try {
        const newDes = await Service({
            name,location,price,rating,type,style,image
        })
        await newDes.save()
        res.status(200).json({message:"Service added successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Service not added"})
    }
}

//Get all Destination
const getService=async(req,res)=>{
    try {
        const getDes = await Service.find()
        res.status(200).json(getDes)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Service not found"})
    }
}

export {addService , getService}



