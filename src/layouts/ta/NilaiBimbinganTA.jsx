import React, { useState, useEffect } from "react";
import axios from "axios";
import Kriteria from "../../components/Kriteria";

const NilaiBimbinganTA = ({ ket, kat, nim, nip }) => {
  const [penilaian, setPenilaian] = useState([]);
  const [nilai, setNilai] = useState([]);

  useEffect(() => {
    const fetchKriteria = async () => {
      try {
        const response = await axios.get(
          `https://ghostwhite-hummingbird-779835.hostingersite.com/input-nilai/kriteria.php?jenis_kategori=${kat}&jenis_keterangan=${ket}`
        );
        setPenilaian(response.data);
        setNilai(Array(response.data.length).fill(0)); // Inisialisasi nilai dengan panjang data
        console.log(response);
      } catch (error) {
        console.error("Error fetching kriteria:", error);
      }
    };

    fetchKriteria();
  }, []);

  const handleInputChange = (index, value) => {
    const newNilai = [...nilai];
    newNilai[index] = value;
    setNilai(newNilai);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ghostwhite-hummingbird-779835.hostingersite.com/input-nilai/input-nilai.php",
        {
          id_kriteria: penilaian.map((p) => p.id), // Mengirim array ID kriteria
          nilai: nilai, // Mengirim array nilai
          nip: nip, // Kirim nip dosen
          nim: nim, // Kirim nim mahasiswa
          id_kategori: 2, // Sesuaikan dengan jenis_kategori yang diinginkan
          id_keterangan: 1, // Sesuaikan dengan jenis_keterangan yang diinginkan
        }
      );
      console.log(response.data); // Menampilkan respons dari server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(ket);
  console.log(kat);
  console.log(penilaian);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {penilaian.map((kriteria, index) => (
            <Kriteria
              key={index}
              kriteria={kriteria}
              index={index}
              handleInputChange={handleInputChange}
            />
          ))}
        </div>
        <div className="flex justify-between w-full pb-2 mb-4 border-b-2 border-secondary">
          <p className="text-2xl font-bold text-secondary font-primary">
            Total Nilai
          </p>
          <p className="w-[10%] p-1 text-center rounded bg-secondary text-customWhite font-primary font-medium">
            {nilai.reduce((acc, val) => acc + Number(val), 0)}
          </p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white rounded bg-primary"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default NilaiBimbinganTA;
