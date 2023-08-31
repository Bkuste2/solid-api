import express from "express";
import {userRoutes} from "./users/user.routes";

const router = express.Router();

router.use('/users', userRoutes);

export { router };