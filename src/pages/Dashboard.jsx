import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Hero from "../layouts/Hero";
import HistoryKP from "../layouts/HistoryKP";
import HistoryTA from "../layouts/HistoryTA";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HistoryKP />
      <HistoryTA />
      <Footer />
    </>
  );
};

export default Dashboard;
