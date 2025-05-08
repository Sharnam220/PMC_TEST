import mongoose from "mongoose";
import { CategoryInterface } from "../interfaces/category.interface";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<CategoryInterface>("Category", categorySchema);
