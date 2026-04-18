import { Request, Response, NextFunction } from "express";
import * as lessonServices from "../services/lessonServices";
import { successResponse } from "../utils/responseHelper";
import { httpCodes } from "../constants/httpCodes";

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const response = await lessonServices.create(req.body);
        return successResponse(
            res,
            { data: response }
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Fetches a single lesson by its ID
 */
export const fetchById = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const response = await lessonServices.fetchById(String(req.params.id));
        return successResponse(
            res,
            { data: response }
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Fetches all lessons associated with a specific Course ID
 */
export const fetchByCourseId = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const response = await lessonServices.fetchByCourseId(String(req.params.id));
        return successResponse(
            res,
            { data: response }
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Updates a lesson's content or metadata by ID
 */
export const updateById = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const response = await lessonServices.updateById(req.body, String(req.params.id));
        return successResponse(
            res,
            { data: response }
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Deletes a single lesson by ID
 */
export const deleteById = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        await lessonServices.deleteById(String(req.params.id));
        return successResponse(
            res,
            { status: httpCodes.NO_CONTENT.statusCode }
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Deletes all lessons associated with a specific Course ID
 */
export const deleteByCourseId = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        await lessonServices.deleteByCourseId(String(req.params.id));
        return successResponse(
            res,
            { status: httpCodes.NO_CONTENT.statusCode }
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Deletes every lesson document in the collection
 */
export const deleteAll = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        await lessonServices.deleteAll();
        return successResponse(
            res,
            { status: httpCodes.NO_CONTENT.statusCode }
        );
    } catch (error) {
        next(error);
    }
};