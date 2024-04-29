import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar.js";

import {
  ProductDetail,
  getProductDetail,
} from "../../services/productsServices.js";

import "./productDetailView.scss";
import BuyBox from "./components/BuyBox.js";

const ProductDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetail>();

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (id) {
        const res = await getProductDetail(id);
        setProduct(res);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <SearchBar />
      {product && (
        <div className="product-detail">
          <p className="breadcrumb-item">{`breadcrumb > ${product.category}`}</p>
          <div className="product-detail-content">
            <div className="product-detail-head">
              <img
                className="product-detail-head__img"
                src={product.item.picture}
                alt={product.item.title}
              />
              <BuyBox
                title={product.item.title}
                amount={product.item.price.amount}
              />
            </div>
            <div className="product-detail-description">
              <h1 className="product-detail-description__title">
                Descripción del producto
              </h1>
              <p className="product-detail-description__text">
                {product.item.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailView;
