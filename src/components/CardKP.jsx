import React from "react";
import profile from "../assets/noavatar.png";

const CardKP = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index} // Gunakan index sebagai key sementara
          className="bg-white border-2 rounded-[16px] group-hover:blur-sm hover:!blur-none group-hover:scale-[.95] hover:!scale-100 shadow-lg border-secondary mix-blend-luminosity overflow-hidden cursor-pointer duration-100"
        >
          <div className="flex items-center gap-6 p-4">
            <img
              src={profile}
              alt="test"
              className="w-[30%] border-2 rounded-full border-primary"
            />
            <div>
              <h1 className="text-lg font-bold text-primary font-primary">
                {item.nama}
              </h1>
              <h2 className="font-medium text-md text-secondary font-primary">
                {item.nim}
              </h2>
            </div>
          </div>
          <div className="p-4 bg-primary">
            <h1 className="text-lg font-semibold tracking-wide text-customWhite font-primary line-clamp-2">
              {item.judul}
            </h1>
            <p className="mt-3 text-sm leading-2 text-customWhite font-primary">
              {item.tanggal} &#8226; {item.tempat}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardKP;
