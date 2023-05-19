import React from "react";

const ScoreList = ({ data, reverse }) => {
  return (
    <div
      className={`flex items-center justify-between border-b border-[#FFFF00] ${reverse}`}
    >
      <div>
        <p className="m-0 py-2.5 px-4 font-medium text-lg">{data.name}</p>
      </div>
      <div
        className={`w-[120px] flex justify-center items-center ${
          reverse
            ? "bg-gradient-to-r from-[#FFC525] to-[#FFFF00]"
            : "bg-gradient-to-r from-[#FFFF00] to-[#FFC525]"
        }`}
      >
        <p className="m-0 py-2.5 px-4 font-medium text-lg">{data.score}</p>
      </div>
    </div>
  );
};

export default ScoreList;
