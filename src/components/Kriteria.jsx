import React from "react";

const Kriteria = ({ kriteria, index, handleInputChange }) => {
  const labelId = `q${index + 1}`;
  const inputId = `q${index + 1}`;

  const handleChange = (event) => {
    handleInputChange(index, event.target.value);
  };

  return (
    <div className="flex justify-between w-full pb-2 mb-4 border-b-2 border-secondary">
      <label
        htmlFor={labelId}
        className="text-base font-semibold text-primary font-primary"
      >
        {kriteria.penilaian}
      </label>
      <input
        type="number"
        min={0}
        max={100}
        id={inputId}
        className="inline-block w-16 h-auto py-1 pl-4 pr-1 font-medium text-center rounded bg-secondary text-customWhite font-primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default Kriteria;
