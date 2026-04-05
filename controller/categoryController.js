import { Category } from "../models/categoryModel.js";
import { Product } from "../models/model.js";
import catchAsync from "../utils/catchAsync.js";

export const createCategory = catchAsync(async (req, res, next) => {
  const { name, ...rest } = req.body;
  const slug = slugify(name, {
    lower: true,
    strict: true,
  });
  const category = await Category.create({
    name,
    slug,
    ...rest,
  });
  res.status(200).json({ status: "success", data: category });
});

export const getCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
    ],
  });
  res.status(200).json({ status: "success", data: categories });
});

export const getCategory = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const category = await Category.findOne({
    where: { slug },
    include: [
      {
        model: Product,
      },
    ],
  });
  res.status(200).json({ status: "success", data: category });
});

export const updateCategory = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const updateData = { ...req.body };
  if (req.body.name) {
    updateData.slug = slugify(req.body.name, {
      lower: true,
      strict: true,
    });
  }
  await Category.update(updateData, { where: { slug } });
  const category = await Category.findOne({
    where: { slug: updateData.slug || slug },
  });
  res.status(200).json({ status: "success", data: category });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  await Category.destroy({ where: { slug } });
  res.status(204).json();
});
