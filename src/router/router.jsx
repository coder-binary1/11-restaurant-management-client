import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/Food/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import SingleFood from "../Pages/SingleFood/SingleFood";
import OrderFood from "../Pages/Order/OrderFood";
import PrivateRoute from "./PrivateRoute";
import MyOrder from "../Pages/Order/MyOrder";
import AddFood from "../Pages/Food/AddFood";
import MyFood from "../Pages/Food/MyFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allFoods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch("http://localhost:5000/foodCount"),
      },
      {
        path: "allFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allFood/${params.id}`),
      },
      {
        path: "orderFood/:foodId",
        element: (
          <PrivateRoute>
            <OrderFood></OrderFood>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allFood/${params.foodId}`),
      },
      {
        path: "myOrder",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      { path: "gallery", element: <Gallery></Gallery> },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
