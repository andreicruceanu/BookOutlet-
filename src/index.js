import App from "./pages/app/app";
import BookStore from "./pages/book-store/book-store";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import BookInfo from "./pages/book-info/BookInfo";
import store from "./store/store";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<BookStore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<BookInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
