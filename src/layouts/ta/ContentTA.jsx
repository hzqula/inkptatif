import React, { useState } from "react";
import CardInputTA from "../../components/CardInputTA";

const ContentTA = ({ userInfo }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [keterangan, setKeterangan] = useState("dibimbing");

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleDibimbing = () => {
    setKeterangan("dibimbing");
  };

  const handleDiuji = () => {
    setKeterangan("diuji");
  };

  return (
    <>
      <div className="w-[85%] mx-auto">
        <div className="flex justify-center pt-[9rem] mx-auto">
          <h1 className="mb-12 text-3xl font-bold text-primary font-primary">
            Daftar Mahasiswa
            <span className="text-secondary"> Kerja Praktik</span>
          </h1>
        </div>
        <div className="flex justify-center w-4/5 mx-auto mb-10">
          <button
            onClick={handleDibimbing}
            className="text-primary px-8 font-semibold text-lg inline-block py-2 text-[14px] font-primary relative after:contents[''] after:w-full after:h-[4px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:transition-all w-full"
          >
            Dibimbing
          </button>
          <button
            onClick={handleDiuji}
            className="text-secondary px-8 font-semibold text-lg inline-block py-2 text-[14px] font-primary relative after:contents[''] after:w-full after:h-[4px] after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-secondary after:transition-all w-full"
          >
            Diuji
          </button>
        </div>
        <div className="relative">
          <span
            className={`absolute -translate-y-1/2 top-[60%] left-4 ${
              isInputFocused ? "right-4" : ""
            }`}
          >
            <box-icon name="search"></box-icon>
          </span>
          <input
            type="search"
            className="w-full h-10 px-12 border rounded-full border-secondary placeholder:text-primary placeholder:opacity-80 placeholder:font-primary focus:border-none focus:ring-primary focus:ring-2 active:border-none"
            placeholder="Cari mahasiswa..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div className="grid grid-cols-3 mt-12 gap-y-12 gap-x-16">
          <CardInputTA userInfo={userInfo} nilai={90} ket={keterangan} />
        </div>
      </div>
    </>
  );
};

export default ContentTA;
