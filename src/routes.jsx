import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./pages/components/dashboard/Dashboard";
import { ManageOrders } from "./pages/components/manageOrders/ManageOrders";
import { ManageProducts } from "./pages/components/manageProducts/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      { path: "products", element: <ManageProducts /> },
      { path: "orders", element: <ManageOrders /> },
    ],
  },
]);

export default router;
