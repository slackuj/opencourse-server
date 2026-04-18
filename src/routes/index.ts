import {Router} from "express";
import {courseRoutes} from "./courseRoutes";
import {lessonRoutes} from "./lessonRoutes";

export const routes = Router();
routes.use("/courses", courseRoutes);
routes.use("/lessons", lessonRoutes);