import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";

import { Products, getProducts } from "../../services/productsServices";
import Product from "./components/Product";

import "./productsListView.scss";

const ProductsListView = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");

  const [products, setProducts] = useState<Products>();

  useEffect(() => {
    const fetchProducts = async () => {
      if (search) {
        const res = await getProducts(search);
        setProducts(res);
      }
    };

    fetchProducts();
  }, [search]);

  return (
    <div>
      <SearchBar />
      {products && (
        <div className="products">
          <p className="breadcrumb-item">{products.categories?.[0]}</p>
          <div className="products-content">
            {products.items.map((product, index) => (
              <div key={product.id}>
                <Product product={product} />
                {products.items.length - 1 !== index && (
                  <div className="product-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsListView;
