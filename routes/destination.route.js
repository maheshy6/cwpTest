import { Router } from "express";
import { addDestination, getDestination} from "../controller/destination.controller.js";
import { addService, getService } from "../controller/service.controller.js";

const destinationRoute = Router()

destinationRoute.post("/",addDestination)
destinationRoute.get("/",getDestination)
//for service
destinationRoute.post("/services",addService)
destinationRoute.get("/services",getService)

export default destinationRoute