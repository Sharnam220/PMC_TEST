import express from "express";
import categoryController from "../controllers/category-controller";

const categoryRouter = express.Router();

categoryRouter.post("/create", categoryController.createCategory);
categoryRouter.put("/update/:id", categoryController.updateCategory);
categoryRouter.delete("/delete/:id", categoryController.deleteCategory);
categoryRouter.get("/all", categoryController.getAllCategories);
categoryRouter.get("/:catogoryId", categoryController.apiGetCatagoryById as any);

export = categoryRouter;
