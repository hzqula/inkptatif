import React, { useState, useEffect } from "react";
import profile from "../assets/noavatar.png";
import ContentDetailTA from "../layouts/ta/ContentDetailTA";
import axios from "axios";

const CardInputTA = ({ status = "sudah", nilai, userInfo, ket }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (userInfo && userInfo.nip) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://inkptatif-api.000webhostapp.com/dosen/dosen.php?nip=${userInfo.nip}`
          );
          let ta = [];
          if (response.data.length > 0) {
            const mahasiswaData = [...response.data[0][ket]];
            for (let index = 0; index < mahasiswaData.length; index++) {
              if (mahasiswaData[index].kategori === "ta") {
                ta.push(mahasiswaData[index]);
              }
            }
          }

          setDatas(ta);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [userInfo, ket]);

  const handleShowModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedData(null);
  };

  return (
    <>
      {datas.map((data) => (
        <div
          key={data.nim}
          className="flex items-center justify-between pb-6 border-b-2 border-secondary"
        >
          <div className="flex gap-2">
            <img
              src={profile}
              alt=""
              className="rounded-full h-[48px] border border-primary"
            />
            <div>
              <h1 className="-mb-1 text-lg font-semibold line-clamp-1 text-primary font-primary">
                {data.nama}
              </h1>
              <h2 className="text-base italic font-medium text-secondary font-primary">
                {data.nim}
              </h2>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              {status === "sudah" ? (
                <>
                  <p className="inline-block px-4 py-3 text-xs font-semibold rounded-lg bg-customGreen text-customWhite">
                    Sudah/{nilai}
                  </p>
                  <a
                    href="#"
                    onClick={() => handleShowModal(data)}
                    className="inline-block px-4 py-3 text-xs font-semibold rounded-lg bg-primary text-customWhite"
                  >
                    Detail
                  </a>
                </>
              ) : (
                <>
                  <p className="inline-block px-4 py-3 text-xs font-semibold rounded-lg bg-customRed text-customWhite">
                    Belum
                  </p>
                  <a
                    href="/"
                    className="inline-block px-4 py-3 text-xs font-semibold rounded-lg bg-primary text-customWhite"
                  >
                    Detail
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      {showModal && selectedData && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50 w-full">
          <div className="w-full p-8 bg-transparent rounded-lg">
            <ContentDetailTA
              userInfo={userInfo}
              data={selectedData}
              onClose={handleCloseModal}
              ket={ket}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardInputTA;
