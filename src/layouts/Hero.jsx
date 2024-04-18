import React from "react";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section className="pt-[10rem]">
      <div className="flex items-center justify-between w-4/5 m-auto">
        <div className="w-1/2">
          <h1 className="text-primary text-[56px] font-bold leading-none">
            Assalamu'alaikum,
          </h1>
          <h2 className="text-secondary text-[56px] font-bold leading-tight mb-2">
            Bu Fulanah
          </h2>
          <p className="font-medium text-[16px] text-primary font-primary">
            InKPTA<span className="text-secondary">TIF</span> adalah tempat
            dimana Bapak/Ibu melakukan pengisian nilai mahasiswa Kerja Praktek
            dan Tugas Akhir.
          </p>
        </div>
        <div className="flex justify-end w-1/2">
          <img
            src={heroImg}
            alt="hero"
            className="border-2 rounded-[32px] w-[90%] border-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
