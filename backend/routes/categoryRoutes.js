import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.route("/").get(getCategories);
router.route("/").post(createCategory);

router
  .route("/:slug")
  .get(getCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

export default router;
