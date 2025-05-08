import mongoose from "mongoose";
import { ProductInterface } from "../interfaces/product.interface";

const productSchema = new mongoose.Schema<ProductInterface>({
  productName: { type: String, required: true },
  productId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  supplierInfo: { type: String },
  dateAdded: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  lowStockThreshold: { type: Number, default: 10 }
});

export default mongoose.model<ProductInterface>("Product", productSchema);
