import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { UserContextProvider } from "../../components/userContext.jsx/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
