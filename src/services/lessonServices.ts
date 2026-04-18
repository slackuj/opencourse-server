import {CreateLessonRequest, UpdateLessonRequest} from "../types/opencourse";
import {LessonModel} from "../models/courseModel";

export const create = async(data: CreateLessonRequest) => (
    await LessonModel.create(data)
);

export const fetchByCourseId = async(courseId: string) => {
    const lessons = await LessonModel.find({course: courseId}).sort({ createdAt: -1 }).exec();
    if (!lessons) {
        throw new Error("Lessons not found");
    }
    return lessons;
};

export const fetchById = async(id: string) => {
    const lesson = await LessonModel.findById(id);
    if (!lesson) {
        throw new Error("Lesson not found");
    }
    return lesson;
};

export const deleteAll = async() => (
    await LessonModel.deleteMany()
);

export const deleteByCourseId = async(courseId: string) => {
    const deletedLessons = await LessonModel.deleteMany({course: courseId});
    if (!deletedLessons) {
        throw new Error("Lessons not found for expert");
    }
};

export const deleteById = async(id: string) => {
    const lesson = await LessonModel.findByIdAndDelete(id);
    if (!lesson) {
        throw new Error("Lesson not found");
    }
};

export const updateById = async(data: UpdateLessonRequest, id: string) => {
    const updatedLesson = LessonModel.findByIdAndUpdate(
        id,
        data,
    { returnDocument: "after"},
    );
    if (!updatedLesson) {
        throw new Error("Course not found");
    }
    return updatedLesson;
};