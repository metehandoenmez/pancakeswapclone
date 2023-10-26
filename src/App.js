// styles
import "./Styles/Ifo.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Layouts
import { MbNavbar, Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import { Homepage } from "./Pages/Homepage";
import { LeaderboardPage } from "./Pages/Leaderboard Page";
import { IFOPage } from "./Pages/IFO Page";
import Swap from "./Pages/Swap";
import Swap_Page from "./Pages/Swap_Page";
import { AffiliatesPage } from "./Pages/AffiliatesPage";
import { Aptos_Page } from "./Pages/Aptos_Page";
import PageNotFound from "./Components/PageNotFound";
import { AffiliatesDashboard } from "./Pages/AffiliatesDashboard";

let darkPref = localStorage.getItem("darkMode");

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/affiliates-program" element={<AffiliatesPage />} />
        <Route path="/affiliates-dashboard" element={<AffiliatesDashboard />} />
        <Route path="/aptos" element={<Aptos_Page />} />
        <Route path="/ifo" element={<IFOPage></IFOPage>} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/swap" element={<Swap_Page />} />
        <Route path="/testingswap" element={<Swap />} />
      </Routes>
      <Footer />
      <MbNavbar />
    </div>
  );
}

export default App;
