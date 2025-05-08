import { Request, Response } from "express";
import productService from "../services/product-service";
import mongoose from "mongoose";

const apiCreateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await productService.createProduct(data);
    return res.status(201).json({ status: true, data: result });
  } catch (error: any) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const apiGetProducts = async (_req: Request, res: Response) => {
  try {
    const result = await productService.findProducts();
    return res.status(200).json({ status: true, data: result });
  } catch (error: any) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const apiGetProductById = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const result = await productService.findProductById(name);
    return res.status(200).json({ status: true, data: result });
  } catch (error: any) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const apiUpdateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.updateProduct(productId, req.body);
    return res.status(200).json({ status: true, data: result });
  } catch (error: any) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const apiDeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteProduct(productId);
    return res.status(200).json({ status: true, data: result });
  } catch (error: any) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// controllers/product-controller.ts
const apiUpdateStock = async (req: Request, res: Response) => {
  try {
    const { productId, pointer } = req.body;
    const updatedProduct = await productService.updateStock(productId, pointer);
    return res.status(200).json({
      status: true,
      data: updatedProduct,
      message: "Stock updated successfully",
    });
  } catch (error: any) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

const apiSearchProducts = async (req: Request, res: Response) => {
  try {
    const { name, categories, minPrice, maxPrice } = req.query;

    const searchCriteria: any = {};

    if (name) {
      searchCriteria.productName  = { $regex: name, $options: "i" };
    }

    if (categories) {
      const categoryArray = Array.isArray(categories)
        ? categories
        : (categories as string).split(",");

      searchCriteria.categories = {
        $in: categoryArray.map((id: any) => new mongoose.Types.ObjectId(id)),
      };
    }

    if (minPrice || maxPrice) {
      searchCriteria.price = {};
      if (minPrice) searchCriteria.price.$gte = parseFloat(minPrice as string);
      if (maxPrice) searchCriteria.price.$lte = parseFloat(maxPrice as string);
    }

    const products = await productService.searchProducts(searchCriteria);
    return res.status(200).json({
      status: true,
      data: products,
      message: "Search completed",
    });

  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export default { apiCreateProduct, apiGetProducts, apiGetProductById, apiUpdateProduct, apiDeleteProduct , apiUpdateStock, apiSearchProducts};
