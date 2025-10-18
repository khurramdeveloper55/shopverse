import { User } from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    status: "success",
    data: newUser,
  });
};
