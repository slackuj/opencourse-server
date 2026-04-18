import {CourseComponentData} from "./components";

export interface course {
    id: string; // ObjectId
    name: string; // name of the course
    description: string; // short description
    expert: string; // expert who contributed to build the course
    lessons: string[]; // ObjectId[] for course lessons
}

export interface lesson {
    id: string; // ObjectId
    lesson: number; // Lesson Number : Lesson 1, Lesson 2, ...
    name: string; // lesson Name
    course: string; // ObjectId of the course
    contents: CourseComponentData[]; // contents[]
}

export interface CreateCourseRequest {
    name: string;
    description: string;
    expert: string;
    lessons: string[]; // empty[]
}

export type UpdateCourseRequest = Partial<CreateCourseRequest>;

export interface CreateLessonRequest {
    name: string;
    lesson: number;
    course: string;
    contents: CourseComponentData[];
}

export type UpdateLessonRequest = Partial<CreateLessonRequest>;