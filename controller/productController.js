import { Product } from "../models/productModel.js";
import catchAsync from "../utils/catchAsync.js";

export const createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ status: "success", data: product });
});

export const getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll();
  res.status(200).json({ status: "success", data: products });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { id } });
  res.status(200).json({ status: "success", data: product });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Product.update(req.body, { where: { id } });
  const product = await Product.findByPk(id);
  res.status(200).json({ status: "success", data: product });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.status(204).json();
});
