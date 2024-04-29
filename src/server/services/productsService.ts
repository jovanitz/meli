import { Request } from "express";
import url from "url";
import apiClient from "../helpers/apiClient.js";
import { normalizeProducts } from "../normalizers/normalizeProducts.js";

const AUTHOR = {
  name: "Joshua",
  lastname: "Torres",
};

export const getProducts = async (req: Request) => {
  const path = req.originalUrl;
  const parsedUrl = url.parse(path, true);
  const params = parsedUrl.query;
  const response = await apiClient({ url: "/sites/MLA/search", params });
  return { author: AUTHOR, ...normalizeProducts(response) };
};
