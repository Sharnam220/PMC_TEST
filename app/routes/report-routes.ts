import express from "express";
import reportController from "../controllers/report-controller";
import { authenticateJWT, authorizeRoles } from "../middleware/auth.middleware";

const router = express.Router();

// Only Admins should be allowed to access reports
router.get("/inventory", authenticateJWT as any, authorizeRoles("admin")as any, reportController.getInventoryReport as any);

export default router;
