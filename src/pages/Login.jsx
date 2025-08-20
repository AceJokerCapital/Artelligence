import React, { useEffect } from "react";
import { logo } from "../assets";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./../utils/api/apiHelper";

const Login = () => {
  const navigate = useNavigate();

  //states

  //effect

  useEffect(() => {
    localStorage.clear();
    console.log(baseUrl);
  }, []);

  const googleResponse = (response) => {
    const decodedMsg = jwt_decode(response.credential);
    const { name, picture, sub } = decodedMsg;

    const doc = {
      name,
      picture,
      sub,
    };

    console.log(doc);

    mongoAddUser(doc);
  };

  const mongoAddUser = async (doc) => {
    try {
      const response = await fetch(`${baseUrl}/user-x`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(doc),
      });

      const data = await response.json();

      console.log(data, import.meta.env.VITE_API);

      if (response.ok) {
        if (localStorage.getItem("user")) {
          //exists
        } else {
          //doesnt exist
          localStorage.setItem("user", JSON.stringify(doc));
        }

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="w-96 h-96 bg-[#809475] flex flex-col justify-center items-center absolute top-[25%] shadow-2xl">
        <img className="w-32 h-32 mb-6" src={logo} alt="Logo" />
        <h1 className="bg-gradient-to-t from-[#abb57b] to-emerald-500 mb-20 p-2 w-full  items-center justify-center flex rounded-md font-mono text-lg">
          ARTELLIGENCE
        </h1>

        <GoogleLogin
          onSuccess={googleResponse}
          onError={() => console.log("ERROR")}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default Login;
