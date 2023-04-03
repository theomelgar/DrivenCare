import { Router } from "express";
import appointmentRoutes from "./appointmentRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;