import express from "express";
import productController from "../controllers/product-controller";

const productRouter = express.Router();

productRouter.get("/searchProducts", productController.apiSearchProducts as any);

export = productRouter;
