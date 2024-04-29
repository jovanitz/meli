import { Request } from "express";
import url from "url";
import apiClient from "../helpers/apiClient.js";
import { normalizeProducts } from "../normalizers/normalizeProducts.js";
import { normalizeProductDetail } from "../normalizers/normalizeProductDetail.js";

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

export const getProductDetail = async (id: string) => {
  const productDetail = await apiClient({ url: `/items/${id}` });
  const productDescription = await apiClient({
    url: `/items/${id}/description`,
  });
  return {
    author: AUTHOR,
    ...normalizeProductDetail({ productDetail, productDescription }),
  };
};

export const getProductSeo = async (id: string) => {
  const productDetail = await apiClient({ url: `/items/${id}` });
  return {
    title: productDetail.title,
    picture: productDetail.pictures?.[0].url,
  };
};

export const getProductsSeo = async (search: string) => {
  const response = await apiClient({
    url: "/sites/MLA/search",
    params: { q: search, limit: 4 },
  });
  return { author: AUTHOR, ...normalizeProducts(response) };
};
