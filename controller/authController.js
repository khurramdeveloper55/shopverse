import { User } from "../models/userModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { promisify } from "util";

export const signup = catchAsync(async (req, res, next) => {
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
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Email or password is not provided", 401));
  }

  const user = await User.scope("withPassword").findOne({
    where: {
      email,
    },
  });
  if (!user && !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Invalid email or password"));
  }
  const loggedUser = user.get({ plain: true });
  delete loggedUser.password;
  const token = await jwt.sign(
    { id: loggedUser.id },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return res.json({ status: "success", token, data: loggedUser });
});

export const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in. Please login to get access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  const currectUser = await User.findOne({ where: { id: decoded.id } });

  if (!currectUser) {
    return next("The user belonging to this token does no longer exist", 401);
  }

  req.user = currectUser;

  next();
});
