import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ContentTA from "../layouts/ta/ContentTA";

const InputNilaiTA = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://ghostwhite-hummingbird-779835.hostingersite.com/login.php?app=dosen&action=get",
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
      <ContentTA userInfo={userInfo} />
      <Footer />
    </>
  );
};

export default InputNilaiTA;
