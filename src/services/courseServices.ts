import {CreateCourseRequest, UpdateCourseRequest} from "../types/opencourse";
import {CourseModel} from "../models/courseModel";

export const create = async(data: CreateCourseRequest) => (
    await CourseModel.create(data)
);

export const fetchAll = async() => (
    await CourseModel.find().sort({ createdAt: -1 }).exec()
);

export const fetchByExpertId = async(expertId: string) => {
    const course = await CourseModel.find({expert: expertId}).sort({ createdAt: -1 }).exec();
    if (!course) {
        throw new Error("Course not found");
    }
    return course;
};

export const fetchById = async(id: string) => {
    const course = await CourseModel.findById(id);
    if (!course) {
        throw new Error("Course not found");
    }
    return course;
};

export const deleteAll = async() => {
    await CourseModel.deleteMany();
};

export const deleteByExpertId = async(expertId: string) => {
    const deletedCourses = await CourseModel.deleteMany({expert: expertId});
    if (!deletedCourses) {
        throw new Error("Courses not found for expert");
    }
};

export const deleteById = async(id: string) => {
    const course = await CourseModel.findByIdAndDelete(id);
    if (!course) {
        throw new Error("Course not found");
    }
};

export const updateById = async(data: UpdateCourseRequest, id: string) => {
    const updatedCourse = CourseModel.findByIdAndUpdate(
        id,
        data,
    { returnDocument: "after"},
    );
    if (!updatedCourse) {
        throw new Error("Course not found");
    }
    return updatedCourse;
};