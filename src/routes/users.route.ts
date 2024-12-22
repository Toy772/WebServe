import express  from "express";
import { UsersController } from "../controllers/user.controller";
export const userRoutes = express.Router();

userRoutes.get(`/users`, UsersController.getAll);

userRoutes.get(`/users/:id`, UsersController.getById);

userRoutes.post(`/users`, UsersController.save);

userRoutes.delete(`/users/:id`, UsersController.remove);

userRoutes.put(`/users/:id`, UsersController.update);