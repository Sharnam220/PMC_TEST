import express from "express";
import productController from "../controllers/product-controller";
import { authenticateJWT, authorizeRoles } from "../middleware/auth.middleware";

const productRouter = express.Router();

productRouter.post("/create",authenticateJWT as any, authorizeRoles("admin")as any, productController.apiCreateProduct as any);
productRouter.get("/all", authenticateJWT as any, productController.apiGetProducts as any);
productRouter.get("/:name",authenticateJWT as any, productController.apiGetProductById as any);
productRouter.put("/:productId",authenticateJWT as any, authorizeRoles("admin") as any, productController.apiUpdateProduct as any);
productRouter.delete("/:productId",authenticateJWT as any, authorizeRoles("admin") as any, productController.apiDeleteProduct as any);

productRouter.post("/updateStock",authenticateJWT as any, authorizeRoles("admin")as any, productController.apiUpdateStock as any);

export = productRouter;
