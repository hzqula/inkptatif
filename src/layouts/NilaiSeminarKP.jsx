import React from "react";
import Kriteria from "../components/Kriteria";

const NilaiSeminarKP = () => {
  const kriteria = [
    { content: "Motivasi dan semangat" },
    { content: "Keuletan dalam penelitian" },
    { content: "Kreativitas" },
    { content: "Ketepatan waktu penelitian sesuai jadwal" },
    { content: "Tanggung jawab" },
  ];

  return (
    <>
      <div>
        {kriteria.map((kriteria, index) => (
          <Kriteria key={index} kriteria={kriteria} index={index} />
        ))}
      </div>
      <div className="flex justify-between w-full pb-2 mb-4 border-b-2 border-secondary">
        <p className="text-2xl font-bold text-secondary font-primary">
          Total Nilai
        </p>
        <p className="w-[10%] p-1 text-center rounded bg-secondary text-customWhite font-primary font-medium">
          100
        </p>
      </div>
    </>
  );
};

export default NilaiSeminarKP;
