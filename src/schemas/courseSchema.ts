import { z } from "zod";
import {objectId} from "./globalSchema";

const CourseComponentDataSchema = z.object({
    type: z.enum([
        'Accordion', 'BlockHeader', 'Bullets', 'CodeSnippet',
        'Expert', 'Infos', 'LessonNavLink', 'PagePoster',
        'Paragraph', 'Points', 'Resource', 'TextCard', 'Video'
    ]),
    props: z.record(z.string(), z.any()), // Validates the Mixed 'props' object
});

// --- Course Request Schemas ---

export const CreateCourseRequestSchema = z.object({
    name: z.string().min(4, "Course name is required"),
    description: z.string().min(10, "Description is required"),
    // update expert later to objectId type check
    expert: z.string().min(1, "Expert ID is required"), // ObjectId as string
    lessons: z.array(z.string()).default([]), // Defaults to empty array
});

export const UpdateCourseRequestSchema = CreateCourseRequestSchema.partial();

// --- Lesson Request Schemas ---

export const CreateLessonRequestSchema = z.object({
    name: z.string().min(5, "Lesson name is required"),
    lesson: z.number().int().positive("Lesson number must be positive"),
    course: objectId, // ObjectId of the course
    contents: z.array(CourseComponentDataSchema), // Validates embedded components[cite: 9, 10]
});

export const UpdateLessonRequestSchema = CreateLessonRequestSchema.partial();