import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../core/components/authentication/Login";
import { Dashboard } from "../pages/components/dashboard/Dashboard";
import { ManageOrders } from "../pages/components/manageOrders/ManageOrders";
import { ManageProducts } from "../pages/components/manageProducts/ManageProducts";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <App />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "products",
            element: <ManageProducts />,
          },
          {
            path: "orders",
            element: <ManageOrders />,
          },
        ],
      },
    ],
  },
]);

export default router;
