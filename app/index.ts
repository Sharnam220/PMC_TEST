import express from "express"
import dotenv from "dotenv"
import api_router from "./routes/app-routes"
import product_router from "./routes/product-routes"
import category_router from "./routes/category-routes"
import search_router from "./routes/search-routes"
import authRoutes from "./routes/auth.routes";

import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", api_router)
app.use("/products", product_router)
app.use("/catagories", category_router)
app.use("/search", search_router)
app.use("/api/auth", authRoutes);

dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err);
        process.exit(1);
    }
};

connectDB()


app.listen(process.env.PORT, () => {
    console.log(`Server is Listening at ${process.env.PORT}`)
})