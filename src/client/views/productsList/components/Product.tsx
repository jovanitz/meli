import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatters";
import { ProductItem } from "../../../services/productsServices";

import "./product.scss";

const Product = ({ product }: { product: ProductItem }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/items/${product.id}`);
  };

  return (
    <div className="product" onClick={handleOnClick}>
      <img className="product__img" src={product.picture} alt={product.title} />
      <div className="product__info">
        <div className="product-info">
          <p className="product-info__price">
            {formatPrice(product.price.amount)}
          </p>
          {product.free_shipping && (
            <p className="product-info__free">Envío gratis</p>
          )}
        </div>
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default Product;
