import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./containers";
import { Home, Transportation } from "./screens";

import "./App.css";

require("dotenv").config();

const App = () => {
  return (
    // <div className="App gradient__bg-subpage">
    //   <div className="gradient__bg-navbar">
    //     <Navbar />
    //   </div>
    //   <Header />
    //   <Features />
    //   <MidSection />
    //   <Possibility />
    //   <Footer />
    // </div>
    <>
      <Router>
        <div className="gradient__bg-navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transportation" element={<Transportation />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
