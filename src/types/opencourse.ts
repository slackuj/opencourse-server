import {CourseComponentData} from "./components";

export interface course {
    id: string; // ObjectId
    name: string; // name of the course
    description: string; // short description
    expert: string; // expert who contributed to build the course
    lessons: string[]; // ObjectId[] for course lessons
}

export interface lessons {
    id: string; // ObjectId
    lesson: number; // Lesson Number : Lesson 1, Lesson 2, ...
    course: string; // ObjectId of the course
    contents: CourseComponentData[]; // contents[]
}