import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgres.js";

export const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
});
