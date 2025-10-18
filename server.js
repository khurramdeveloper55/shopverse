import { connection, sequelize } from "./db/postgres.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connection();
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
  });
};

startServer();
