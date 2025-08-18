import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { CreatePost, Profile } from "../pages";
import { Feed } from "../components";
import Footer from "../components/layout/Footer";
import Navbar from './../components/layout/Navbar';

const Home = () => {
  //standard
 
  //state


  return (
    <>
      <Navbar />

      <main className="sm:p-6 px-2 py-8 w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route className="" path="/create-post" element={<CreatePost />} />
          <Route className="" path="/" element={<Feed />} />
          <Route className="" path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default Home;
