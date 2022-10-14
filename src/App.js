import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MainTemplate from "./Components/MainTemplate/MainTemplate";
// import Navbar from "./Pages/NavBar/Navbar";
import Login from './Pages/Login/Login';
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import RequirementAnalysis from "./Components/LandingComponent/RequirementAnalysis/RequirementAnalysis";
// import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainTemplate />}>
            {/* sub Routes */}
            <Route path="/home" element={<Home />} />
            <Route
              path="/home/requirement-analysis"
              element={<RequirementAnalysis />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* redirect empty path to home page */}
            <Route path="/" element={<Navigate to={`/home`} />} />

            {/* redirect other routes to home page */}
            <Route path="/*" element={<Navigate to={`/home`} />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
