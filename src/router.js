import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
// import ErrorBoundary from "./components/Functionalities/ErrorBoundary";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ErrorBoundary from "./pages/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },

  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/products/:id",
    element: <Product />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
