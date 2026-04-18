import {Router} from "express";
import {validateParams, validateRequestBody} from "../middlewares/validator";
import * as courseController from "../controllers/courseController";
import {IdSchema} from "../schemas/globalSchema";
import {CreateCourseRequestSchema, UpdateCourseRequestSchema} from "../schemas/courseSchema";

export const courseRoutes = Router();
courseRoutes.post("/", validateRequestBody(CreateCourseRequestSchema), courseController.create);
courseRoutes.patch("/:id", validateParams(IdSchema), validateRequestBody(UpdateCourseRequestSchema),courseController.updateById);
courseRoutes.delete("/", courseController.deleteAll);
// Example: /api/courses/1719...
courseRoutes.delete("/:id", validateParams(IdSchema), courseController.deleteById);
// Example: /api/courses/expert/1719...
courseRoutes.delete("/expert/:id", validateParams(IdSchema), courseController.deleteByExpertId);
// fetchAll
courseRoutes.get("/", courseController.fetchAll);
// Example: /api/courses/1719...
courseRoutes.get("/:id", validateParams(IdSchema), courseController.fetchById);
// Example: /api/courses/expert/1719...
courseRoutes.get("/expert/:id", validateParams(IdSchema), courseController.fetchByExpertId);