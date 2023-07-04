import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./pages/app/app";
import BookStore from "./pages/book-store/book-store";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import BookInfo from "./pages/book-info/BookInfo";
import Authors from "./pages/authors/authors";
import AuthorsDetails from "./pages/author-Details/authorsDetails";
import { Provider } from "react-redux";
import { store } from "./store.js";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Cart from "./pages/cart/Cart";
import MyAccount from "./pages/myAccount/MyAccount";
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
          <Route path="/account/account" element={<MyAccount />} />
          <Route path="/autori" element={<Authors />} />
          <Route path="/autor/:id" element={<AuthorsDetails />} />
          <Route path="/cos" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
