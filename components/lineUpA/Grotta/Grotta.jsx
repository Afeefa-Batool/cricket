import React from "react";
// import lengju from "../../assets/lengju.png";
import lengju from "../assets/images/lengju.png";

import grotta from "../assets/images/grotta-2.png";
import { grottaFakeData } from "../FakeData/FakeData";
import ScoreList from "../ScoreList/ScoreList";
import Image from "next/image";
const Grotta = () => {
  return (
    <div className="mt-[120px]">
      <div className="h-[100px] bg-[#25003F] flex items-center justify-between">
        <div>
          <p className="m-0 text-white text-[45px] pl-8">GRÓTTA </p>
        </div>
        <div className="p-2 h-[100px] flex items-center justify-center bg-[#FF1536]">
          <img src={lengju} alt="" />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <div className="bg-[#fff]">
            {grottaFakeData.map((data) => (
              <ScoreList data={data} />
            ))}
          </div>
          <div className="p-3">
            <Image className="w-[90%] h-full" src={grotta} alt="" />
          </div>
        </div>

        <div>
          <div className="mt-4">
            <p className="m-0 bg-[#FF1536] w-[fit-content] px-3 text-white">
              MANAGER
            </p>
            <div className="flex items-center justify-between bg-white  h-14 px-4">
              <div>
                <p className="m-0 font-medium text-lg">NAME LAST NAME</p>
              </div>
              <div className="w-[fit-content] bg-[#25003F] flex items-center px-5 text-white h-14">
                <p className="m-0 font-medium text-lg">SUBS:</p>
              </div>
              <div>
                <p className="m-0 font-medium text-lg">
                  19 LAST NAME - 19LAST NAME - 19AST NAME{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grotta;
