import { Request, Response } from "express";
import categoryService from "../services/category-service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategory(req.body);
    res.status(201).json({ status: true, data: result, message: "Category created" });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.updateCategory(req.params.id, req.body);
    res.status(200).json({ status: true, data: result, message: "Category updated" });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.deleteCategory(req.params.id);
    res.status(200).json({ status: true, data: result, message: "Category deleted" });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const apiGetCatagoryById = async (req: Request, res: Response) => {
  try {
    const { catogoryId } = req.params;
    const result = await categoryService.findCatogoryById(catogoryId);
    return res.status(200).json({ status: true, data: result });
  } catch (error: any) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategories();
    res.status(200).json({ status: true, data: result });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export default {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  apiGetCatagoryById
};
