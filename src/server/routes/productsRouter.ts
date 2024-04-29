import express from "express";
import { getProducts, getProductDetail } from "../services/productsService.js";
const router = express.Router();

router.get("/api/items/:id", async (req, res) => {
  const id = req.params.id;
  const response = await getProductDetail(id);
  res.json(response);
});

router.get("/api/items", async (req, res) => {
  const response = await getProducts(req);
  res.json(response);
});

export default router;
