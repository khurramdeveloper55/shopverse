import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(process.cwd(), "config.env"),
});
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_USER_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
    dialectOptions: {
      ssl:
        process.env.NODE_ENV === "production"
          ? {
              require: true,
              rejectUnauthorized: false,
            }
          : false,
    },
  },
);

let UserModel = null;
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established succesfully.");
  } catch (error) {
    console.log("Unable to connect to database", error);
  }
};

export { connection, sequelize };
