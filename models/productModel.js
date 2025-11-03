import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgres.js";
import { Category } from "./categoryModel.js";

export const Product = sequelize.define("Product", {
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
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  vendor: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: "Digital",
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  sizes: {
    type: DataTypes.ENUM("S", "M", "L"),
    defaultValue: "S",
  },
  categoryId: {
    type: DataTypes.UUID,
    references: {
      model: Category,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});
