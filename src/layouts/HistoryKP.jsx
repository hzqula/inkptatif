import React, { useEffect, useState } from "react";
import axios from "axios";
import CardKP from "../components/CardKP";

const HistoryKP = ({ userInfo }) => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    if (userInfo && userInfo.nip) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://moccasin-goldfish-868827.hostingersite.com/dosen/dosen.php?nip=${userInfo.nip}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          const data = response.data[0].dibimbing.concat(
            response.data[0].diuji
          );
          console.log(response.data);

          let kp = [];

          for (let index = 0; index < data.length; index++) {
            if (data[index].kategori === "kp") {
              const seminarResponse = await axios.get(
                `https://moccasin-goldfish-868827.hostingersite.com/seminar/seminar.php?nim=${data[index].nim}`,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              kp = kp.concat(seminarResponse.data);
            }
          }

          console.log(kp);
          setStudentData(kp);
        } catch (error) {
          console.error("Failed to fetch student data:", error);
        }
      };

      fetchData();
    }
  }, [userInfo]);

  return (
    <div className="w-4/5 pt-48 mx-auto">
      <h1 className="inline-block pb-4 mb-8 text-3xl font-bold text-primary font-primary relative after:contents[''] after:inline-block after:absolute after:h-[4px] after:w-full after:bg-secondary after:bottom-0 after:left-0">
        History Penilaian KP, {userInfo ? userInfo.nama : "Loading..."}
      </h1>
      <div className="grid justify-between grid-cols-3 gap-8 mx-auto group">
        <CardKP data={studentData} />
      </div>
    </div>
  );
};

export default HistoryKP;
