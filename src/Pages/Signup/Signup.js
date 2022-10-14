import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from './../../assets/Logos/ideyalabsLogo.png';

//style={formik.values.firstname === "" ? { border: "1px solid red" } : null }
// cnf password confirmation {formik.errors.cnfpassword ? <div className='text-red-600 text-1xl'>{formik.errors.cnfpassword}</div> : null}
export default function Signup() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      cnfpassword: "",
    },
    onSubmit: (values) => {
      values.preventDefault();
      console.log("Form values", values);
      // console.log("form is submitted");
      formik.values("");
    },
    validate: (values) => {
      let errors = {};

      if (!values.firstname) {
        errors.firstname = "Please enter firstname";
      } else if (!values.firstname.match(/^[a-zA-Z]+$/)) {
        errors.firstname = "Name must be in alphabets only";
      }

      if (!values.lastname) {
        errors.lastname = "Please enter lastname";
      } else if (!values.lastname.match(/^[a-zA-Z]+$/)) {
        errors.lastname = "Name must be in alphabets only";
      }

      if (!values.email) {
        errors.email = "Please enter email";
      } else if (
        !values.email.match(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/
        )
      ) {
        errors.email = "email should be example@gmail.com format only";
      }

      if (!values.mobile) {
        errors.mobile = "Please enter mobile";
      }
      // else if(!values.mobile.match(/^(?=.*?[0-9]).{10,}$/))
      // {
      //     errors.mobile='please enter numbers(0-9)'
      // }

      if (!values.password) {
        errors.password = "Please enter password";
      } else if (
        !values.password.match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^$*-]).{8,}$/
        )
      ) {
        errors.password =
          "password should contain atleast min 8 Chars[abc..,ABC..,123..,@#$..]";
      }

      if (!values.cnfpassword) {
        errors.cnfpassword = "Please Re-enter password";
      } else if (values.password === values.cnfpassword) {
        errors.cnfpassword = "password Matched";
      } else {
        errors.cnfpassword = "password and confirm password should be same";
      }
      return errors;
    },
  });

  // console.log("Form Data", formik.values);
  // console.log(formik.values.firstname)

  let data = {
    fName: formik.values.firstname,
    Lname: formik.values.lastname,
    email: formik.values.email,
    mobile: formik.values.mobile,
    password: formik.values.password,
    uniqueId:
      Math.round(Math.random() * 100) + "_" + Math.round(Math.random() * 100),
    loginStatus: false,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      formik.values.firstname &&
      formik.values.lastname &&
      formik.values.email &&
      formik.values.password &&
      formik.values.cnfpassword &&
      formik.values.password === formik.values.cnfpassword
    ) {
      let lsData = localStorage.getItem("userDataList");
      let parseData;
      if (lsData) {
        parseData = JSON.parse(lsData);
      } else {
        parseData = [];
      }
      localStorage.setItem(
        "userDataList",
        JSON.stringify([data, ...parseData])
      );

      let formTags = document.forms[0];
      formTags.firstname.value = "";
      formTags.lastname.value = "";
      formTags.email.value = "";
      formTags.mobile.value = "";
      formTags.password.value = "";
      formTags.cnfpassword.value = "";

      formik.handleSubmit();

      navigate("/login");
    } else {
      alert("please fill out the fields");
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
            <span style={{ color: "#eb7524", marginRight: "3%" }}>Quality</span>
            <span style={{ color: "#285d93" }}>Assurance</span>
          </h1>
        </div>
        <div>
          <img src={Logo} alt="logo" className="h-20 p-2 " />
        </div>
      </div>
      <div className="flex items-end place-content-evenly">
        <div className="formContainer">
          
          {/* <!-- component --> */}
          <div class=" flex flex-col justify-center items-center mt-44  sm:py-12">
            <div class="relative py-3 w-full
            ">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
                <div class="mx-auto">
                  <div>
                    <h1 class="text-3xl w-max rounded-md text-center text-orange-500 bg-blue-500 font-semibold border-2 border-blue-500">
                      Signup
                    </h1>
                  </div>

                  <form autoComplete="off" onSubmit={onSubmit}>
                    <div className="columns-2 gap-28">
                      <label className="block">First name</label>
                      <br />
                      <input
                        type="text"
                        pattern="[A-Za-z]{3,20}"
                        className="px-16 py-3 border-2 rounded-full form-input outline-blue-400"
                        placeholder="enter your firstname"
                        values={formik.values.firstname}
                        onChange={formik.handleChange}
                        name="firstname"
                        id="firstname"
                      />{" "}
                      <br />
                      <span>
                        {formik.errors.firstname ? (
                          <div className="text-red-600 text-1xl">
                            {formik.errors.firstname}
                          </div>
                        ) : null}
                      </span>
                      <br />
                      <label>Last name</label>
                      <br />
                      <br />
                      <input
                        type="text"
                        pattern="[A-Za-z]{3,20}"
                        className="px-16 py-3 border-2 rounded-full form-input outline-blue-400"
                        placeholder="enter your lastname"
                        values={formik.values.lastname}
                        onChange={formik.handleChange}
                        name="lastname"
                        id="lastname"
                      />
                      <br />
                      <span>
                        {formik.errors.lastname ? (
                          <div className="text-red-600 text-1xl">
                            {formik.errors.lastname}
                          </div>
                        ) : null}
                      </span>
                    </div>
                    <br />
                    <div className="columns-2 gap-28">
                      <label className="block">Email</label>
                      <br />
                      <input
                        type="email"
                        className="px-16 py-3 border-2 rounded-full form-input outline-blue-400"
                        placeholder="enter your email"
                        values={formik.values.email}
                        onChange={formik.handleChange}
                        name="email"
                        id="email"
                      />{" "}
                      <br />
                      <span>
                        {formik.errors.email ? (
                          <div className="text-red-600 text-1xl">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </span>
                      <br />
                      <label>Mobile</label>
                      <br />
                      <br />
                      <input
                        type="number"
                        className="px-16 py-3 border-2 rounded-full form-input outline-blue-400"
                        placeholder="enter mobile number"
                        values={formik.values.mobile}
                        onChange={formik.handleChange}
                        name="mobile"
                        id="mobile"
                      />{" "}
                      <br />
                      <span>
                        {formik.errors.mobile ? (
                          <div className="text-red-600 text-1xl">
                            {formik.errors.mobile}
                          </div>
                        ) : null}
                      </span>
                    </div>
                    <br />
                    <div className="columns-2 gap-28">
                      <label className="block">Password</label>
                      <br />
                      <input
                        type="password"
                        className="px-16 py-3 border-2 rounded-full form-input outline-blue-400"
                        placeholder="enter your password"
                        values={formik.values.password}
                        onChange={formik.handleChange}
                        name="password"
                        id="password"
                      />{" "}
                      <br />
                      <span>
                        {formik.errors.password ? (
                          <div className="text-red-600 text-1xl">
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </span>
                      <br />
                      <label>Confirm Password</label>
                      <br />
                      <br />
                      <input
                        type="password"
                        className="px-16 py-3 border-2 rounded-full form-input outline-blue-400"
                        placeholder="Re-enter your password "
                        values={formik.values.cnfpassword}
                        onChange={formik.handleChange}
                        name="cnfpassword"
                        id="cnfpassword"
                      />{" "}
                      <br />
                      {/* <span> {(formik.values.password === formik.values.cnfpassword) ? <div className='text-orange-500 text-1xl'>password and confirm password must be same</div> : <div className='text-green-500 text-1xl'>Matched</div> }</span> */}
                      <span>
                        {formik.errors.cnfpassword ? (
                          <div
                            style={
                              formik.values.cnfpassword
                                ? { color: "green" }
                                : { color: "red" }
                            }
                          >
                            {" "}
                            &nbsp;{formik.errors.cnfpassword}
                          </div>
                        ) : null}
                      </span>
                    </div>
                    <br />
                    <br />
                    <button
                      type="submit"
                      className="px-4 py-1 mb-5 text-2xl font-bold text-white transition duration-300 ease-out bg-blue-600 rounded-md hover:bg-orange-500 ml-72 hover:ease-in"
                    >
                      SignUp
                    </button>
                    <br />
                    <p className="flex justify-center mb-5 ml-4 text-1xl">
                      If You Already Have An Account{" "}
                      <Link className="font-semibold text-blue-500 hover:text-orange-500 hover:underline" to="/login">
                        Login
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
