import express from "express";
import { getProducts } from "../services/productsService.js";
const router = express.Router();

router.get("/api/items", async (req, res) => {
  const response = await getProducts(req);
  res.json(response);
});

export default router;
