import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import BookStore from "./pages/book-store/book-store";
import Login from "./pages/signin/LoginPage/Login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/signin/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import BookInfo from "./pages/bookPage/bookDetails/BookInfo";
import AuthorsDetails from "./pages/author-Details/authorsDetails";
import Cart from "./pages/cart/Cart/Cart";
import LayoutAccount from "./pages/account/LayoutAccount/LayoutAccount";
import MyAccount from "./pages/account/MyAccount/MyAccount";
import PersonalData from "./pages/account/PersonalData/PersonalData";
import Favorite from "./pages/account/Favorites/Favorite";
import Vouchers from "./pages/account/Vouchers/Vouchers";
import Orders from "./pages/account/Orders/Orders";
import App from "./App";
import Authors from "./pages/authorsPage/authors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <BookStore />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recover-password",
        element: <ForgotPassword />,
      },
      {
        path: "/resetare-parola",
        element: <ResetPassword />,
      },
      {
        path: "/book/:id",
        element: <BookInfo />,
      },
      {
        path: "/autori",
        element: <Authors />,
      },
      {
        path: "/autor/:id",
        element: <AuthorsDetails />,
      },
      {
        path: "/cos",
        element: <Cart />,
      },
      {
        path: "/account",
        element: <LayoutAccount />,
        children: [
          {
            path: "account",
            element: <MyAccount />,
          },
          {
            path: "personal",
            element: <PersonalData />,
          },
          {
            path: "favourites",
            element: <Favorite />,
          },
          {
            path: "vouchers",
            element: <Vouchers />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
