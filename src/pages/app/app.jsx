import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setListFavorites } from "../../features/auth/authSlice";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
