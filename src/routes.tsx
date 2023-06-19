import { createBrowserRouter } from "react-router-dom";
import GamesDetailPage from "./pages/GamesDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GamesDetailPage />,
      },
    ],
  },
]);

export default router;
