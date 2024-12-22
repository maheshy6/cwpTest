import { Router } from "express";
import { addDestination, getDestination} from "../controller/destination.controller.js";

const destinationRoute = Router()

destinationRoute.post("/",addDestination)
destinationRoute.get("/",getDestination)

export default destinationRoute