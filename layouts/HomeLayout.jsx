import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { CreatePost, Profile } from "../src/pages";
import { Feed } from "../src/components";
import Footer from "../src/components/layout/Footer";
import Navbar from '../src/components/layout/Navbar';

const HomeLayout = () => {
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

export default HomeLayout;
