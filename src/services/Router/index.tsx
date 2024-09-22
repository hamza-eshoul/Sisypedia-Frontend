import { createBrowserRouter } from "react-router-dom";

// pages
import AuthPage from "@/pages/Auth";
import Homepage from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
]);

export default router;
