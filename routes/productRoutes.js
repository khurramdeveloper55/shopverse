import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controller/productController.js";

const router = express.Router();

router.route("/").post(createProduct).get(getProducts);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

export default router;
