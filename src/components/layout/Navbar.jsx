import { logo } from "@/assets/index";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
const Navbar = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  // States
  const [btnText, setBtnText] = useState("Create");
  const [btnText1, setBtnText1] = useState("Profile");
  const [btnState, setBtnState] = useState("/create-post");
  const [btnState1, setBtnState1] = useState("/profile");
  // Lifecycle

  // Functions
  function buttonPathWay() {
    if (location == "/create-post") {
      setBtnText1("Profile");
      setBtnState1("/profile");
      setBtnText("Home");
      setBtnState("/");
    } else if (location == "/profile") {
      setBtnText1("Home");
      setBtnState1("/");
      setBtnText("Create");
      setBtnState("/create-post");
    } else {
      setBtnText1("Profile");
      setBtnState1("/profile");

      setBtnText("Create");
      setBtnState("/create-post");
    }
  }

  useEffect(() => {
    buttonPathWay();
  }, [location]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <nav className="w-full flex justify-between items-center bg-[#809475] xs:px-8 px-4 py-4 border-b border-b-[#e6ebf4] ">
        <div className="flex justify-center items-center gap-2">
          <Link
            to="/"
            className="flex flex-row justify-center items-center gap-2"
          >
            <img
              className="max-xs:w-20 w-28 object-contain"
              src={logo}
              alt="logo"
            />
          </Link>
          <h1 className="max-xs:text-[14px] sm:text-[18px] md:text-[21px]">
            R T E L L I G E N C E
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 ">
          <Link
            to={`${btnState1}`}
            className="max-xs:w-14 max-xs:text-[12px] w-20 flex items-center justify-center font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md hover:scale-105"
          >{`${btnText1}`}</Link>

          <Link
            to={`${btnState}`}
            className="max-xs:w-14 max-xs:text-[12px] w-20 flex items-center justify-center first-letter font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md hover:scale-105"
          >{`${btnText}`}</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
