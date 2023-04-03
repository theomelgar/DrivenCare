import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";

const appointmentRoutes = Router();



export default appointmentRoutes;