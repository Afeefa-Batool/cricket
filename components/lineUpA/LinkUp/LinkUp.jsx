import React from "react";
import grotta from "../assets/images/grotta.png";
import lengju from "../assets/images/lengju.png";
import njardik from "../assets/images/njardik.png";
import ScoreList from "../ScoreList/ScoreList";
import Grotta from "../Grotta/Grotta";
import { grottaFakeData, njardvikFakeData } from "../FakeData/FakeData";

const LinkUp = () => {

  return (
    <div className="py-20 bg-lime-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center justify-between bg-[#25003F] h-[100px]">
            <div className="flex items-center gap-[40px]">
              <div className=" bg-white py-1  h-[100px] flex items-center justify-center">
                <img src={grotta} className="h-full" alt="" />
              </div>
              <div>
                <h2 className="text-white text-[45px]">GRÓTTA </h2>
              </div>
            </div>
            <div className="p-2 h-[100px] flex items-center justify-center bg-[#FF1536]">
              <img src={lengju} className="w-48" alt="" />
            </div>
            <div className="flex items-center gap-[40px]">
              <div>
                <h1 className="text-white text-[45px]">NJARÐVÍK</h1>
              </div>
              <div className="bg-white py-1 flex items-center h-[100px] justify-center">
                <img src={njardik} className="h-full" alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[100px]">
            <div className="ml-[105px]">
              <div className="bg-[#fff]">
                {grottaFakeData.map((data) => (
                  <ScoreList data={data} />
                ))}
              </div>
              <div className="mt-4">
                <p className="m-0 bg-[#FF1536] w-[fit-content] px-3 text-white">
                  MANAGER
                </p>
                <div>
                  <p className="m-0 py-2.5 px-4 font-medium text-lg bg-white">
                    NAME LAST NAME
                  </p>
                </div>
              </div>
            </div>
            <div className="mr-[111px]">
              <div className="bg-[#fff]">
                {njardvikFakeData.map((data) => (
                  <ScoreList data={data} reverse={"flex-row-reverse"} />
                ))}
              </div>
              <div className="mt-4 text-end">
                <div>
                  <div className="flex justify-end">
                    <p className="m-0 bg-[#FF1536] w-[fit-content] px-3 text-white">
                      MANAGER
                    </p>
                  </div>
                  <div>
                    <p className="m-0 py-2.5 px-4 font-medium text-lg bg-white">
                      NAME LAST NAME
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>

        <>
        <Grotta />
        </>
      </div>
    </div>
  );
};

export default LinkUp;
