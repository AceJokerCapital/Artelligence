import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Login, PrivacyPolicy } from "./pages";
import HomeLayout from "../layouts/HomeLayout";

import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  //vite uses import.meta.env.key not process.env

  return (
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
      <BrowserRouter>
        <div className=" bg-[#d4d8cb] flex flex-col">
          <Routes>
            <Route className="" path="/login" element={<Login />} />
            <Route className="" path="/*" element={<HomeLayout />} />
            <Route
              className=""
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
