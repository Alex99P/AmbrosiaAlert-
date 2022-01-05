import express from "express";

import { getDatas,createData,getData,deleteData } from "../controllers/data.js";
const router = express.Router();

router.get("/datas", getDatas);
router.post("/data", createData);
router.get("/data/:id", getData);
router.delete("/data/:id", deleteData);
// router.put("/user/:id", updateData);

export default router;
