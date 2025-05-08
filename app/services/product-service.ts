import { ProductInterface } from "../interfaces/product.interface";
import Product from "../models/product.model";

const createProduct = async (data: ProductInterface) => {
  try {
    const result = await Product.create(data);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const findProducts = async () => {
  try {
    return await Product.find({}).populate("categories");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const findProductById = async (productId: string) => {
  try {
    return await Product.findOne({ productId });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateProduct = async (productId: string, updateData: Partial<ProductInterface>) => {
  try {
    updateData.lastUpdated = new Date();
    return await Product.updateOne({ productId }, { $set: updateData });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteProduct = async (productId: string) => {
  try {
    return await Product.deleteOne({ productId });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// services/product-service.ts
const updateStock = async (productId: string, pointer: number) => {
  const product = await Product.findOne({ productId });

  if (!product) throw new Error("Product not found");

  const newQuantity = product.quantity + pointer;
  if (newQuantity < 0) throw new Error("Insufficient stock");

  product.quantity = newQuantity;
  product.lastUpdated = new Date();

  await product.save();

  if (product.lowStockThreshold && product.quantity <= product.lowStockThreshold) {
    console.warn(`Low stock alert for ${product.productName}: ${product.quantity} remaining`); // optionally send an alert or log it
  }

  return product;
};

const searchProducts = async (query: any) => {
  try {
    return await Product.find(query);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default { createProduct, findProducts, findProductById, updateProduct, deleteProduct , updateStock, searchProducts};
