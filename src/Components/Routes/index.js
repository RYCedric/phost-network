import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Profil from "../../Pages/Profil";
import Trending from "../../Pages/Trending";
import NotFound from "../../Pages/NotFound";
import Navbar from "../Navbar";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
