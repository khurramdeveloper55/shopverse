import AppError from "../utils/appError.js";

export const globalErrorHandler = (err, req, res, next) => {
  (err.statusCode = err.statusCode || 500),
    (err.status = err.status || "error");

  if (err.name === "SequelizeUniqueConstraintError") {
    err = new AppError(err.errors[0].message, 400);
  }

  if (err.name === "SequelizeValidationError") {
    err = new AppError(err.errors[0].message, 400);
  }

  if (err.name === "SequelizeDatabaseError") {
    err = new AppError("Database error occurred", 500);
  }

  return res
    .status(err.statusCode)
    .json({ status: err.status, message: err.message });
};
