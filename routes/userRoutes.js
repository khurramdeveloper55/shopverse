import express from "express";
import { login, protect, signup } from "../controller/authController.js";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/").get(protect, getUsers);
router
  .route("/:id")
  .get(protect, getUser)
  .patch(protect, updateUser)
  .delete(protect, deleteUser);

export default router;
