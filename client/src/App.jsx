import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;