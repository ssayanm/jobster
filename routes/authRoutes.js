import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";

import { register, login, updateUser } from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticatedUser, updateUser);

export default router;
