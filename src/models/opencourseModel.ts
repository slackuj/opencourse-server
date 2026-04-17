import { Schema, model, Document } from "mongoose";
import { course, lessons } from "../types/opencourse";

// --- Course Model ---
export interface ICourse extends course, Document {}

const courseSchema = new Schema<ICourse>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    expert: { type: String, ref: 'Expert', required: true },
    lessons: [{ type: String, ref: 'Lesson' }]
}, { timestamps: true });

export const CourseModel = model<ICourse>("Course", courseSchema);

// --- Lesson Model (Embedded Content) ---
export interface ILesson extends lessons, Document {}

const contentSchema = new Schema({
    type: {
        type: String,
        required: true,
        // Matches the 'type' in CourseComponentData
        enum: [
            'Accordion', 'BlockHeader', 'Bullets', 'CodeSnippet',
            'Expert', 'Infos', 'LessonNavLink', 'PagePoster',
            'Paragraph', 'Points', 'Resource', 'TextCard', 'Video'
        ]
    },
    // Matches the 'props' in CourseComponentData
    props: { type: Schema.Types.Mixed, required: true }
}, { _id: true });

const lessonSchema = new Schema<ILesson>({
    lesson: { type: Number, required: true },
    course: { type: "String", ref: 'Course', required: true },
    contents: [contentSchema]
}, { timestamps: true });

export const LessonModel = model<ILesson>("Lesson", lessonSchema);