import React from "react";
import CardTA from "../components/CardTA";

const HistoryTA = () => {
  return (
    <div className="w-4/5 pt-48 mx-auto">
      <h1 className="inline-block pb-4 mb-8 text-3xl font-bold text-primary font-primary relative after:contents[''] after:inline-block after:absolute after:h-[4px] after:w-full after:bg-secondary after:bottom-0 after:left-0">
        History Penilaian TA, Bu Fulanah
      </h1>
      <div className="grid justify-between grid-cols-3 gap-8 mx-auto group">
        <CardTA />
      </div>
    </div>
  );
};

export default HistoryTA;
