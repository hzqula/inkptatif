import React from "react";
import Kriteria from "../../components/Kriteria";

const NilaiSidangTA = () => {
  const kriteria = [
    { content: "Sikap (attitude) presentasi" },
    { content: "Kemampuan Presentasi" },
    { content: "Penguasaan Terhadap Materi" },
    { content: "Urgensi terhadap masalah penelitian" },
    { content: "Relevansi referensi dengan judul penelitian" },
    { content: "Kesesuaian metodologi penelitian dengan pembahasan" },
    { content: "Teknik pengumpulan data sesuai standar laporan TA" },
    { content: "Tahapan analisa sesuai dengan standar laporan TA" },
    { content: "Tahapan rancangan sesuai dengan standar laporan TA" },
    { content: "Produk penelitian sesuai dengan standar laporan TA" },
    { content: "Tahapan pengujian sesuai dengan standar laporan TA" },
    { content: "Hubungan permasalahan dengan hasil penelitian" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-x-8">
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

export default NilaiSidangTA;

{
  /* <div className="grid grid-cols-2 gap-x-8">
  <Kriteria content="Sikap (attitude) presentasi" />
  <Kriteria content="Kemampuan Presentasi" />
  <Kriteria content="Penguasaan Terhadap Materi" />
  <Kriteria content="Urgensi terhadap masalah penelitian" />
  <Kriteria content="Relevansi referensi dengan judul penelitian" />
  <Kriteria content="Kesesuaian metodologi penelitian dengan pembahasan" />
  <Kriteria content="Teknik pengumpulan data sesuai standar laporan TA" />
  <Kriteria content="Tahapan analisa sesuai dengan standar laporan TA" />
  <Kriteria content="Tahapan rancangan sesuai dengan standar laporan TA" />
  <Kriteria content="Produk penelitian sesuai dengan standar laporan TA" />
  <Kriteria content="Tahapan pengujian sesuai dengan standar laporan TA" />
  <Kriteria content="Hubungan permasalahan dengan hasil penelitian" />
</div>; */
}
