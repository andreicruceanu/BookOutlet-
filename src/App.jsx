import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setListFavorites, setModalNoUser } from "./features/auth/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalNoUser from "./components/modalNoUser/modalNoUser";
import endpoints from "./api/endpoints";
import content from "./constants/content";
import PopupCart from "./components/popupCart/PopupCart";

function App() {
  const { user, modalNoUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClose = () =>
    dispatch(setModalNoUser({ open: false, content: "" }));

  useEffect(() => {
    const getFavorites = async () => {
      const res = await axios.get(endpoints.userFavorite, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res) {
        dispatch(setListFavorites(res.data));
      }
    };

    if (user) {
      getFavorites();
    }
    if (!user) {
      dispatch(setListFavorites([]));
    }
  }, [user, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose="3000"
        closeOnClick
        pauseOnHover={false}
      />
      <ModalNoUser
        textHeader={content.login}
        textContent={modalNoUser.content}
        open={modalNoUser.open}
        onClose={handleClose}
      />
      <PopupCart />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
