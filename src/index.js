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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<BookStore />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookInfo />} />
        <Route path="/autori" element={<Authors />} />
        <Route path="/autor/:id" element={<AuthorsDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
