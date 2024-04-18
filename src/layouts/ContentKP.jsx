import React from "react";
import CardInputKP from "../components/CardInputKP";
import { useState } from "react";
import TabBar from "../components/TabBar";

const ContentKP = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
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
        <div className="flex justify-center mb-10">
          <TabBar content="Yang Dibimbing" status="active" />
          <TabBar content="Yang Diuji" status="nonactive" />
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
          <CardInputKP nilai={90} />
        </div>
      </div>
    </>
  );
};

export default ContentKP;
