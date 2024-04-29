import ErrorView from "../views/ErrorView";
import HomeView from "../views/home/HomeView";
import ProductView from "../views/product/ProductView";
import ProductsListView from "../views/productsList/ProductsListView";

const HOME_ROUTE = "/";
const PRODUCTS_LIST_ROUTE = "/products-list";
const PRODUCT = "/product/:id";

export const CLIENT_ROUTES = [
  {
    path: HOME_ROUTE,
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
  {
    path: PRODUCTS_LIST_ROUTE,
    element: <ProductsListView />,
    errorElement: <ErrorView />,
  },
  {
    path: PRODUCT,
    element: <ProductView />,
    errorElement: <ErrorView />,
  },
];
