import express from "express";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { globalErrorHandler } from "./controller/errorController.js";
import AppError from "./utils/appError.js";
import cors from "cors";

const app = express();

app.use(express.json());

const allowedOrigins = process.env.CLIENT_URL.split(",");
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  }),
);

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);

app.use((req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on  this server`, 404));
});

app.use(globalErrorHandler);

export default app;
