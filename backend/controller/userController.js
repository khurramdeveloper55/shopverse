import { User } from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ status: "success", data: users });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  res.status(200).json({ status: "success", data: user });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await User.update(req.body, { where: { id } });
  const user = await User.findByPk(id);
  res.status(200).json({ status: "success", data: user });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.status(204).json();
});
