import Category from "../models/category.model";
import { CategoryInterface } from "../interfaces/category.interface";

const createCategory = async (data: CategoryInterface) => {
  return await Category.create(data);
};

const updateCategory = async (id: string, update: Partial<CategoryInterface>) => {
  return await Category.findByIdAndUpdate(id, update, { new: true });
};

const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

const getAllCategories = async () => {
  return await Category.find({});
};


const findCatogoryById = async (name: string) => {
  try {
    return await Category.findOne({ name });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  findCatogoryById
};
