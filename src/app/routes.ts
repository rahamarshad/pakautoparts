import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { RequestPartPage } from "./pages/RequestPartPage";
import { SellerDashboardPage } from "./pages/SellerDashboardPage";
import { CheckoutPage } from "./pages/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/search",
    Component: SearchResultsPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetailPage,
  },
  {
    path: "/request-part",
    Component: RequestPartPage,
  },
  {
    path: "/seller-dashboard",
    Component: SellerDashboardPage,
  },
  {
    path: "/checkout",
    Component: CheckoutPage,
  },
]);