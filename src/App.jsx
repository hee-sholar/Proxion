import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import Footer from "./components/Footer";
// import { Features } from "./pages/Features";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/features" element={<Features />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;