import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./pages/app/app";
import BookStore from "./pages/book-store/book-store";
import Login from "./pages/signin/LoginPage/Login.jsx";
import Register from "./pages/register/register";
import Authors from "./pages/authors/authors";
import AuthorsDetails from "./pages/author-Details/authorsDetails";
import { Provider } from "react-redux";
import { store } from "./store.js";
import ForgotPassword from "./pages/signin/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Cart from "./pages/cart/Cart";
import MyAccount from "./pages/account/MyAccount/MyAccount";
import PersonalData from "./pages/account/PersonalData/PersonalData.jsx";
import Favorite from "./pages/account/Favorites/Favorite";
import BookInfo from "./pages/bookPage/bookDetails/BookInfo.jsx";
import LayoutAccount from "./pages/account/LayoutAccount/LayoutAccount.jsx";
import Vouchers from "./pages/account/Vouchers/Vouchers.jsx";
import Orders from "./pages/account/Orders/Orders.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<BookStore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<ForgotPassword />} />
          <Route path="/resetare-parola" element={<ResetPassword />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/account/*" element={<LayoutAccount />}>
            <Route path="account" element={<MyAccount />} />
            <Route path="personal" element={<PersonalData />} />
            <Route path="favourites" element={<Favorite />} />
            <Route path="vouchers" element={<Vouchers />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="/autori" element={<Authors />} />
          <Route path="/autor/:id" element={<AuthorsDetails />} />
          <Route path="/cos" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
