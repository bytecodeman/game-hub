import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GamesDetailPage from "./pages/GamesDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "games/:slug",
          element: <GamesDetailPage />,
        },
      ],
    },
  ],
  {
    basename: "/specialapps/gamehub/",
  }
);

export default router;
