import { useEffect, useState } from "react";
import profile from "../../assets/noavatar.png";
import TabBarNilai from "../../components/TabBarNilai";
import NilaiBimbinganKP from "./NilaiBimbinganKP";

const ContentDetailKP = ({ onClose, data, ket, userInfo }) => {
  const [seminarData, setSeminarData] = useState(null);

  useEffect(() => {
    const fetchSeminar = async () => {
      try {
        const response = await fetch(
          `https://inkptatif.000webhostapp.com/seminar/seminar.php?nama=${encodeURIComponent(
            data.nama
          )}`
        );
        const seminarData = await response.json();
        setSeminarData(seminarData[0]); // Asumsikan data adalah array dan kita hanya butuh item pertama
      } catch (error) {
        console.error("Error fetching seminar data:", error);
      }
    };
    fetchSeminar();
  }, [data.nama]); // Tambahkan data.nama sebagai dependency untuk useEffect

  if (!seminarData) {
    return <div>Loading...</div>;
  }

  console.log(ket);
  console.log(data);
  console.log(userInfo);

  return (
    <div className="w-[85%] mx-auto p-8 border-2 border-secondary rounded-3xl flex relative bg-white">
      <div className="w-[40%] flex flex-col gap-y-8 border-secondary border-r pr-8">
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt=""
            className="rounded-full h-[64px] border border-primary"
          />
          <div>
            <h1 className="-mb-1 text-2xl font-semibold line-clamp-1 text-primary font-primary">
              {seminarData.nama}
            </h1>
            <h2 className="text-xl italic font-medium text-secondary font-primary">
              {seminarData.nim}
            </h2>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-secondary font-primary">
            Pembimbing I:
          </h2>
          <h1 className="-mb-1 text-xl font-bold line-clamp-1 text-primary font-primary">
            {seminarData.pembimbing && seminarData.pembimbing[0]
              ? seminarData.pembimbing[0].nama
              : "Tidak ada data"}
          </h1>
        </div>
        <div>
          <h2 className="text-xl font-medium text-secondary font-primary">
            Pembimbing II:
          </h2>
          <h1 className="-mb-1 text-xl font-bold line-clamp-1 text-primary font-primary">
            {seminarData.pembimbing && seminarData.pembimbing[1]
              ? seminarData.pembimbing[1].nama
              : "-"}
          </h1>
        </div>
        <div>
          <h1 className="-mb-1 text-2xl font-semibold line-clamp-1 text-secondary font-primary">
            <span className="font-sans font-bold">J</span>udul KP:
          </h1>
          <h2 className="text-xl font-medium text-primary font-primary">
            {seminarData.judul}
          </h2>
        </div>
        <div>
          <h1 className="-mb-1 text-2xl font-semibold line-clamp-1 text-secondary font-primary">
            Pada:
          </h1>
          <h2 className="text-xl font-medium text-primary font-primary">
            {seminarData.tanggal}
          </h2>
          <h2 className="text-xl font-medium text-primary font-primary">
            {seminarData.tempat}
          </h2>
        </div>
        <div className="w-[60%] flex justify-between mx-auto">
          <button className="inline-block py-2 text-customWhite font-medium font-primary bg-secondary w-[45%] rounded-lg">
            Simpan
          </button>
          <button
            onClick={onClose}
            className="inline-block py-2 text-customWhite font-medium font-primary bg-customRed w-[45%] rounded-lg"
          >
            Batal
          </button>
        </div>
      </div>
      <div className="w-[60%] flex flex-col gap-y-8 border-secondary border-l pl-8">
        <div className="flex justify-center mb-10">
          {ket === "dibimbing" ? (
            <TabBarNilai content="Nilai Bimbingan" status="nonactive" />
          ) : (
            <TabBarNilai content="Nilai Seminar" status="nonactive" />
          )}
        </div>
        <NilaiBimbinganKP
          ket={ket}
          kat={data.kategori}
          nim={data.nim}
          nip={userInfo.nip}
        />
        <div className="w-[60%] flex justify-between mx-auto">
          <button className="inline-block py-2 text-customWhite font-medium font-primary bg-primary w-[90%] rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailKP;
