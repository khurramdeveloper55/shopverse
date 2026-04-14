import { Category } from "./categoryModel.js";
import { Product } from "./productModel.js";

Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

export { Category, Product };
