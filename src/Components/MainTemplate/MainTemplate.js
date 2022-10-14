import React from "react";
import Navbar from "../../Pages/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./../../assets/Logos/ideyalabsLogo.png";
import Footer from "../../Pages/Footer/Footer";

const MainTemplate = () => {
  return (
    <>
      <div className=" templateDiv">
        <div className="flex flex-row justify-between bg-gradient-to-r from-slate-200 via-orange-300 to-blue-300">
          <div>
            <h1
              className="p-2 text-5xl font-bold text-gray-500"
              style={{ fontStyle: "font-family: 'Lato', sans-serif;" }}
            >
              {" "}
              <span style={{ color: "#eb7524", marginRight: "3%" }}>
                Quality
              </span>
              <span style={{ color: "#285d93" }}>Assurance</span>
            </h1>
          </div>
          <div>
            <img src={Logo} alt="logo" className="h-20 p-2 " />
          </div>
        </div>
        <Navbar />
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default MainTemplate;
