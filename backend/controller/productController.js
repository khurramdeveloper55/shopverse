import { Product } from "../models/productModel.js";
import { Category } from "../models/model.js";
import catchAsync from "../utils/catchAsync.js";

export const createProduct = catchAsync(async (req, res, next) => {
  const { name, ...rest } = req.body;
  const slug = slugify(name, {
    lower: true,
    strict: true,
  });
  const product = await Product.create({ name, slug, ...rest });
  res.status(201).json({ status: "success", data: product });
});

export const getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll({
    include: [{ model: Category, attributes: ["slug"] }],
  });
  res.status(200).json({ status: "success", data: products });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const product = await Product.findOne({
    where: { slug },
    include: [
      {
        model: Category,
        attributes: ["slug"],
      },
    ],
  });
  res.status(200).json({ status: "success", data: product });
});

export const updateProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const updateData = { ...req.body };
  if (req.body.name) {
    updateData.slug = slugify(req.body.name, {
      lower: true,
      strict: true,
    });
  }
  await Product.update(updateData, { where: { slug } });
  const product = await Product.findOne({
    where: { slug: updateData.slug || slug },
  });
  res.status(200).json({ status: "success", data: product });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  await Product.destroy({ where: { slug } });
  res.status(204).json();
});
