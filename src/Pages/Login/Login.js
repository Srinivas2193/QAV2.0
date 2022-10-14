import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LogBot from "./../../assets/Images/Login/cyber-bg.png";
import Logo from './../../assets/Logos/ideyalabsLogo.png';
import "./Login.css";

export const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  let navigate = useNavigate();

  // onSubmit localStorage Part
  const onSubmit = (event) => {
    event.preventDefault();

    let lsData = localStorage.getItem("userDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }
    if (parseData !== null && !parseData.length > 0) {
    } else {
      let i = 0;
      let userUniqueID = "";
      try {
        while (i <= parseData.length) {
          // console.log(parseData[i].email);
          if (
            parseData[i].email === userName &&
            parseData[i].password === userPassword
          ) {
            parseData[i].loginStatus = true;
            userUniqueID = parseData[i].uniqueId;
            localStorage.setItem("userDataList", JSON.stringify(parseData));

            // props.history.push('/home');
            navigate("/home");
            document.getElementById("navBar").style.display = "flex";
            props.loginPageCall(userUniqueID);
            break;
          } else {
            document.getElementById("navBar").style.display = "none";
          }
          i += 1;
        }
      } catch (err) {
        // console.log("error occured: ",err);
        document.getElementsByClassName("errMessage")[0].style.visibility =
          "visible";
        setTimeout(() => {
          document.getElementsByClassName("errMessage")[0].style.visibility =
            "hidden";
        }, 2500);
      }
    }
  };

  return (
    <>

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
      <div className="flex flex-row items-end place-content-evenly">
        <div>
          <img className="logimIng" src={LogBot} alt="logon" />
        </div>
        <div className="formContainer">
          {/* <form
            onSubmit={onSubmit}
            className="container flex flex-col items-center justify-center justify-end pt-10 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-9">Login</h2>
            <br></br>
            <label className="block textColor" htmlFor="userName">
              Username :
            </label>
            <br />
            <input
              type="text"
              name="userName"
              id="userName"
              className="border-2 border-blue-400 rounded-full textSize p-9 bottom-2"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="enter your name"
            />
            <div className="text-red-500"></div>
            <br />
            <label className="block passtextColor">Password :</label>
            <br />
            <input
              type="password"
              className="border-2 rounded-full textSize form-input outline-blue-400"
              placeholder="Enter Your Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />{" "}
            <br /> <br />
            <button
              type="submit"
              className="font-bold text-white duration-300 bg-white rounded-md logIn text-2 text-slate-900 hover:bg-orange-600"
            >
              Login
            </button>
            <p className="forgotPass">
              <Link className="hover:text-orange-600 hover:underline" to="/">
                <b>Forgot Password</b>
              </Link>
            </p>
            <span className="mt-6 text-1xl textColor2">
              If You Don't Have An Account&nbsp; &nbsp;
              <Link
                className="text-white-500 hover:text-orange-600 hover:underline"
                to="/signup"
              >
                <b>Signup</b>
              </Link>
            </span>
          </form> */}
          {/* <!-- component --> */}
          <div class=" flex flex-col justify-center items-center mt-52  sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                  <div>
                    <h1 class="text-3xl w-max rounded-md text-center text-slate-100 bg-blue-500 font-semibold border-2 border-blue-500">
                      Login
                    </h1>
                  </div>
                  <div className="errMessage">
        <p>Incorrect credentials, Please check and try again!</p>
      </div>
                  <form onSubmit={onSubmit} autocomplete="off">
                    <div class="divide-y divide-gray-200">
                      <div class="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="relative">
                          <input
                            type="text"
                            name="userName"
                            id="userName"
                            class="peer placeholder-transparent bg-white h-10 w-full border-2 rounded-md border-gray-200 hover:border-orange-300 text-gray-900 focus:outline-none focus:border-4 border-blue-500"
                            placeholder="Email address"
                            onChange={(e) => {
                              setUserName(e.target.value);
                            }}
                          />
                          <label
                            for="email"
                            class="absolute left-2.5 -top-2.5 px-0.5 text-gray-600 bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:text-orange-500"
                          >
                            Email Address
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            class="peer placeholder-transparent bg-white h-10 w-full border-2 rounded-md border-gray-200 hover:border-orange-300 text-gray-900 focus:outline-none focus:border-4 border-blue-500"
                            placeholder="Password"
                            onChange={(e) => setUserPassword(e.target.value)}
                          />
                          <label
                            for="password"
                            class="absolute left-2.5 -top-2.5 px-0.5 text-gray-600 bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:text-orange-500"
                          >
                            Password
                          </label>
                        </div>
                        <div class="relative">
                          <button
                            type="submit"
                            class="bg-blue-500 text-white rounded-md px-2 py-1"
                          >
                            Submit
                          </button>
                        </div>
                        <div className="relative">
                        <span className="mt-6 text-blue-400 text-1xl">
              If You Don't Have An Account&nbsp;
              <Link
                className="text-white-500 hover:text-orange-600 hover:underline"
                to="/signup"
              >
                <b>Signup</b>
              </Link>
            </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
