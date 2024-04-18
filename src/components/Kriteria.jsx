import React from "react";

const Kriteria = ({ kriteria, index }) => {
  const labelId = `q${index + 1}`;
  const inputId = `q${index + 1}`;

  return (
    <div className="flex justify-between w-full pb-2 mb-4 border-b-2 border-secondary">
      <label
        htmlFor={labelId}
        className="text-base font-semibold text-primary font-primary"
      >
        {kriteria.content}
      </label>
      <input
        type="number"
        min={0}
        max={100}
        id={inputId}
        className="inline-block h-auto w-16 py-1 pr-1 pl-4 text-center rounded bg-secondary text-customWhite font-primary font-medium"
      />
    </div>
  );
};

export default Kriteria;
