import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "../Context/ThemeContext/ThemeProvider";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col h-screen mx-auto font-poppins">
      <ThemeProvider>
        <Navbar></Navbar>
      </ThemeProvider>
      <div className="grow">
        <Outlet></Outlet>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
