import React from "react";
import { Link } from "react-router-dom";
import { ImCtrl } from "react-icons/im";
import "./Navbar.css";

const Navbar = () => {
  //   let logoutBtn = (e) => {
  //     // document.getElementById("navBar").style.display = "none";
  //     // console.log(e.target);
  //   };

  const services = [
    { id:'s-101', title: "Requirement Analysis" },
    { id: "s-102", title: "Mindmap" },
    { id: "s-103", title: "Inter Locking" },
    { id: "s-104", title: "Flow Chart" },
    // { id: "s-105", title: "Requirement Traceability" },
    { id: "s-106", title: "Test Design" },
    // { id: "s-107", title: "Build and Deployment Process" },
    { id: "s-108", title: "API Testing" },
    // { id: "s-109", title: "Functional Automation Testing" },
    { id: "s-110", title: "Perfomance Testing" },
    { id: "s-111", title: "Security Testing" },   
  ]

  return (<>
    <div id="navBarDiv">
      <div
        id="navBarContainer"
        className="flex items-center shadow-2xl justify-right bg-gradient-to-r from-cyan-400 to-blue-500 "
        style={{
          height: "45px",
          display: "flex",
          justifyContent: "right",
          paddingRight: "1rem",
        }}
      >
        <nav id="navBar" className="flex justify-end navBar">
          <Link
            to="/home"
            className="px-3 py-2 text-2xl font-semibold rounded-lg text-slate-200 hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 text-2xl font-medium rounded-lg text-slate-200 hover:text-orange-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 text-2xl font-medium rounded-lg text-slate-200 hover:text-orange-500"
          >
            Contact
          </Link>
          
          <Link>
            <div class="group flex-col items-center w-[130px]">
              <div class="btn group flex flex-row font-semibold text-2xl px-3 py-2 text-slate-200 rounded  hover:text-orange-500">
                <span className="w-[92px]">Services</span> <ImCtrl className="mt-2 text-lg font-bold duration-300 group-hover:rotate-180 group-hover:mt-2 hover:ease-out" />
              </div>
                  <div
                    class="flex flex-col justify-start gap-3 bg-white drop-shadow-lg p-2 object mt-4 shadow-xl z-10"
                  >
              <div class="triangle-up"></div>

                    {
                        services.map((res,i)=>{
                            return (
                                <ul>
                                    <li className="submenu hover:bg-gradient-to-r from-cyan-400 to-blue-500">
                                    <Link className="py-3 font-semibold text-blue-500 dropdown_list" to=''> {res.title} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
              </div>
            </div>
          </Link>
          <Link
            // onClick={logoutBtn}
            to="/login"
            className="px-3 py-2 text-2xl font-medium rounded-lg logoutButton text-slate-200 hover:text-blue-600"
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>

    </>
  );
};
export default Navbar;
