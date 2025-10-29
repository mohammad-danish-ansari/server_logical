import express from "express";

const router = express.Router();
import AdminRouter from "./admin/index.js";
import websiteRouter from "./website/index.js";

router.use("/admin", AdminRouter);
router.use("/website", websiteRouter);
export default router;
