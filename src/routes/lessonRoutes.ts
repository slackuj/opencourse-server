import { Router } from "express";
import { validateParams, validateRequestBody } from "../middlewares/validator";
import * as lessonController from "../controllers/lessonController";
import { IdSchema } from "../schemas/globalSchema";
import { CreateLessonRequestSchema, UpdateLessonRequestSchema } from "../schemas/courseSchema";

export const lessonRoutes = Router();

// Create a new lesson with request body validation
lessonRoutes.post(
    "/",
    validateRequestBody(CreateLessonRequestSchema),
    lessonController.create
);

// Update a lesson by ID
lessonRoutes.patch(
    "/:id",
    validateParams(IdSchema),
    validateRequestBody(UpdateLessonRequestSchema),
    lessonController.updateById
);

// Fetch all lessons for a specific course
// Example: /api/lessons/course/645a123...
lessonRoutes.get(
    "/course/:id",
    validateParams(IdSchema),
    lessonController.fetchByCourseId
);

// Fetch a single lesson by ID
lessonRoutes.get(
    "/:id",
    validateParams(IdSchema),
    lessonController.fetchById
);

// Delete all lessons globally
lessonRoutes.delete(
    "/",
    lessonController.deleteAll
);

// Delete a single lesson by ID
lessonRoutes.delete(
    "/:id",
    validateParams(IdSchema),
    lessonController.deleteById
);

// Delete all lessons for a specific course
// Example: /api/lessons/course/645a123...
lessonRoutes.delete(
    "/course/:id",
    validateParams(IdSchema),
    lessonController.deleteByCourseId
);