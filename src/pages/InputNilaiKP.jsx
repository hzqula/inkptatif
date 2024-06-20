import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ContentKP from "../layouts/kp/ContentKP";

const InputNilaiKP = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://moccasin-goldfish-868827.hostingersite.com/login.php?app=dosen&action=get",
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
      <ContentKP userInfo={userInfo} />
      <Footer />
    </>
  );
};

export default InputNilaiKP;
