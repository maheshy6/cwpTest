import { Router } from "express";
import { addTrip, deleteTrip, getTrip } from "../controller/itinerary.controller.js";

const tripRoute = Router()

tripRoute.post("/",addTrip)
tripRoute.post("/:id",deleteTrip)
tripRoute.get("/",getTrip)
// userRoute.post("/forgetpassword",forgetPassword)
// userRoute.post("/resetpassword",resetPassword)


export default tripRoute