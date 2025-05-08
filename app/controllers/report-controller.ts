import { Request, Response } from "express";
import reportService from "../services/report-service";
import { Parser } from "json2csv";

const getInventoryReport = async (req: Request, res: Response) => {
    try {
        const totalValue = await reportService.getTotalStockValue();
        const outOfStock = await reportService.getOutOfStockItems();
        const lowStock = await reportService.getLowStockItems(5);
        const categoryDistribution = await reportService.getCategoryWiseStockDistribution();

        const reportData = {
            totalStockValue: totalValue,
            outOfStock,
            lowStock,
            categoryWiseStockDistribution: categoryDistribution
        };

        if (req.query.export === "csv") {
            const parser = new Parser();
            const csv = parser.parse({
                totalStockValue: totalValue,
                outOfStock: outOfStock.map((p: any) => p.title),
                lowStock: lowStock.map((p: any) => p.title),
                categoryWiseStockDistribution: categoryDistribution
            });

            res.header("Content-Type", "text/csv");
            res.attachment("inventory-report.csv");
            return res.send(csv);
        }

        return res.status(200).json(reportData);
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
};

export default { getInventoryReport };
