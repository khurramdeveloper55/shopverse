import { Category } from "../models/categoryModel.js";
import { Product } from "../models/model.js";
import catchAsync from "../utils/catchAsync.js";

export const createCategory = catchAsync(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(200).json({ status: "success", data: category });
});

export const getCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  });
  res.status(200).json({ status: "success", data: categories });
});

export const getCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findOne({ where: { id } });
  res.status(200).json({ status: "success", data: category });
});

export const updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Category.update(req.body, { where: { id } });
  const category = await Category.findByPk(id);
  res.status(200).json({ status: "success", data: category });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Category.destroy({ where: { id } });
  res.status(204).json();
});
