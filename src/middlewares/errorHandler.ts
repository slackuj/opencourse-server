import { Request, Response, NextFunction } from "express"
import { errorResponse } from "../utils/responseHelper";

export const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";

    return errorResponse(res, { status, message })
}