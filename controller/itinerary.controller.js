import Trip from "../model/itinerary.model.js"
import "dotenv/config"
import nodemailer from "nodemailer"
import {insertEvent,formatDateTime} from "../calenderIntegration/googleCalender.js"

//setup transport 
const transporter = nodemailer.createTransport({
    service:"GMAIL",
    auth:{
        user:process.env.USER_ID,
        pass:process.env.PASSWORD
    }
})

//add new Destination
const addTrip=async(req,res)=>{
    const {username,email,destination,startDate,budget}=req.body
    try {
        const newTrip = await Trip({
            username,email,destination,startDate,budget
        })
        await newTrip.save()

        //send trip details to customer by email
        await transporter.sendMail({
            to: email,
            subject: "Trip Details Confirmation",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #444; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                    <h2 style="color: #4CAF50; text-align: center;">Trip Confirmation</h2>
                    <p style="font-size: 16px;">Dear <strong>${username}</strong>,</p>
                    <p style="font-size: 16px;">Your trip to <strong>${destination}</strong> has been confirmed!</p>
                    <p style="font-size: 16px;">It will start from <strong>${startDate}</strong> and end on <strong>${ "N/A"}</strong>.</p>
                    <p style="font-size: 16px; color: #4CAF50;"><strong>Your estimated budget is ₹${budget || "N/A"}</strong>.</p>
                    <p style="font-size: 16px;">We wish you a wonderful trip! If you have any questions, feel free to contact us.</p>
                    <p style="color: #777; font-size: 14px; text-align: center; margin-top: 20px;">&copy; 2024 The Itinerary Planning Tool. All rights reserved.</p>
                </div>
            `
        })
        //Schedule trip based on customer-provided details in Google Calender
         // Create the event object
        const event = {
            summary: `Trip to ${destination}`,
            description: `
                Trip Details:
                - Username: ${username}
                - Email: ${email}
                - Destination: ${destination}
                - Budget: ₹${budget}
            `,
            start: {
                dateTime: formatDateTime(startDate),
                timeZone: 'Asia/Kolkata'
            },
            end: {
                dateTime: formatDateTime(startDate),
                timeZone: 'Asia/Kolkata'
            }
        };

        // Insert event into Google Calendar
        const response = await insertEvent(event);
        console.log(response)

        //google calender setup ends here
        res.status(200).json({message:"Trip added successfully in Database"})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Trip not added"})
    }
}

//delete Trip
const deleteTrip=async(req,res)=>{
    const {id}=req.params
    
    try {
        const updatedTrips = await Trip.findByIdAndDelete(id)
        res.status(200).json(updatedTrips) 

    } 
    catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Trip not found"})
    }
}





//Get all Trips
const getTrip=async(req,res)=>{
    try {
        const getTrip = await Trip.find()
        res.status(200).json(getTrip)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Trip not found"})
    }
}

export {addTrip,getTrip ,deleteTrip}

