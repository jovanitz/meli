import { getDecimals } from "./normalizeProducts.js";

type ProductDetail = { productDetail: any; productDescription: any };
export const normalizeProductDetail = (product: ProductDetail) => {
  return {
    item: {
      id: product.productDetail.id,
      title: product.productDetail.title,
      price: {
        currency: product.productDetail.currency_id,
        amount: product.productDetail.price,
        decimals: getDecimals(product.productDetail.price),
      },
      picture: product.productDetail.thumbnail,
      condition: product.productDetail.condition,
      free_shipping: product.productDetail.shipping.free_shipping,
      sold_quantity: product.productDetail.sold_quantity,
      description: product.productDescription.plain_text,
    },
    category: product.productDetail.category_id,
  };
};
