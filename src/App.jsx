import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import Detail from "./Pages/Detail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/ürünler",
          element:<Product/>,
        },
        {
          path: "/detay",
          element: <Detail/>,
        },
        {
          path: "/kategori",
          element:<Category/>,
          children: [
            {
              path: "Hikaye", element: <h1>Hikaye Sayfası</h1>
            },
            { path: "Roman", element: <h1>Roman Sayfası</h1>},
          ],
        },
      ],

    },
]);

const App = () => {
  return  <RouterProvider router={router} />;
};

export default App;