import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "../Context/ThemeContext/ThemeProvider";

const MainLayout = () => {
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
