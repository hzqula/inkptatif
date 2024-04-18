import React, { useState } from "react";
import profile from "../assets/profile.png";
import datas from "../data.json";
import ContentDetailKP from "../layouts/ContentDetailKP";

const CardInputKP = ({ status = "sudah", nilai }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleShowModal = () => {
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
          key={data.id}
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
                    onClick={() => {
                      handleShowModal();
                      setSelectedData(data);
                    }}
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
          <div className="p-8 bg-transparent rounded-lg w-full">
            <ContentDetailKP data={selectedData} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default CardInputKP;
