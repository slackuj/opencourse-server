import {Router} from "express";
import {validateParams, validateRequestBody} from "../middlewares/validator";
import * as courseController from "../controllers/courseController";
import {IdSchema} from "../schemas/globalSchema";

export const courseRoutes = Router();
courseRoutes.post("/", validateRequestBody(CreateRoleSchema), authenticate, authorize(appPermissions.CREATE_ROLES.name), courseController.create);
courseRoutes.patch("/:id", validateParams(IdSchema), validateRequestBody(UpdateRoleSchema), authenticate, authorize(appPermissions.MANAGE_ROLES.name), courseController.updateById);
courseRoutes.delete("/:id", validateParams(IdSchema), authenticate, authorize(appPermissions.MANAGE_ROLES.name), courseController.deleteById);
courseRoutes.get("/:id", validateParams(IdSchema), authenticate, authorize(appPermissions.VIEW_ROLES.name), courseController.getById);
courseRoutes.get("/", authenticate, authorize(appPermissions.VIEW_ROLES.name), courseController.getAll);