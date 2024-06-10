import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import HistoryKP from "../layouts/HistoryKP";
import HistoryTA from "../layouts/HistoryTA";
import Footer from "../layouts/Footer";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://inkptatif.000webhostapp.com/index.php?app=dosen&action=get",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setUserInfo(response.data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        // Lakukan penanganan error lain di sini
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Navbar />
      <Hero userInfo={userInfo} />
      <HistoryKP userInfo={userInfo} />
      <HistoryTA userInfo={userInfo} />
      <Footer />
    </>
  );
};

export default Dashboard;
