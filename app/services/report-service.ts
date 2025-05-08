import Product from "../models/product.model";

const getTotalStockValue = async () => {
    const products = await Product.find({});
    const totalValue = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return totalValue;
};

const getOutOfStockItems = async () => {
    return await Product.find({ quantity: 0 });
};

const getLowStockItems = async (threshold: number) => {
    return await Product.find({ quantity: { $lte: threshold, $gt: 0 } });
};

const getCategoryWiseStockDistribution = async () => {
    const products = await Product.aggregate([
        { $unwind: "$categories" },
        {
            $group: {
                _id: "$categories",
                totalQuantity: { $sum: "$quantity" }
            }
        }
    ]);
    return products;
};

export default {
    getTotalStockValue,
    getOutOfStockItems,
    getLowStockItems,
    getCategoryWiseStockDistribution
};
