import { DataTypes, ENUM } from "sequelize";
import { sequelize } from "../db/postgres.js";
import bcrypt from "bcrypt";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user" },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ["password"],
        },
      },
    },
    hooks: {
      beforeSave: async (instance) => {
        if (instance.password) {
          const salt = await bcrypt.genSalt(10);
          return (instance.password = await bcrypt.hash(
            instance.password,
            salt
          ));
        }
      },
      afterCreate: (instance) => {
        delete instance.dataValues.password;
      },
      afterUpdate: (instance) => {
        delete instance.dataValues.password;
      },
    },
  }
);
