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

function App() {
  const { user, modalNoUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setModalNoUser(false));

  useEffect(() => {
    const getFavorites = async () => {
      const res = await axios.get("/api/user/favorite", {
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
        textHeader={"Loghează-te"}
        textContent={
          "Pentru a putea adauga la favorite o carte trebuie sa intri in contul tau BookOutlet"
        }
        open={modalNoUser}
        onClose={handleClose}
      />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
