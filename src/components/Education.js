import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  return (
    <>
      <div className="mt-[2rem] flex items-center justify-center">
        <h1 className="font-black text-white text-[30px] ml-[17rem]">
          Education
        </h1>
      </div>
      <div className="mt-[6rem] flex flex-row items-center justify-center gap-[8rem] ml-[20rem]">
        <div className="flex flex-row gap-[2rem] ">
          <FontAwesomeIcon
            icon={faUserGraduate}
            className="mt-[4px] h-[40px] w-[40px]"
            style={{ color: "white" }}
          />
          <div className="">
            <p className="font-Lato text-[15px] font-black text-white">
              2017-2021
            </p>
            <h2 className="font-Poppins font-black text-[20px] text-white">
              Computer Science Engineer(BS-CS)
            </h2>
            <p className="font-Inter font-black text-[14px] text-white">
              University Of Narowal, Punjab Pakistan
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-[2rem]">
          <FontAwesomeIcon
            icon={faAward}
            className="mt-[4px] h-[40px] w-[40px]"
            style={{ color: "white" }}
          />
          <div className="">
            <p className="font-Lato text-[15px] font-black text-white">
              2021-2022
            </p>
            <h2 className="font-Poppins font-black text-[20px] text-white">
              Full Stack Web Development
            </h2>
            <p className="font-Inter font-black text-[14px] text-white">
              Microverse(Full Time)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[2rem] mt-[6rem] ml-[24rem]">
        <FontAwesomeIcon
          icon={faPersonChalkboard}
          className="mt-[4px] h-[60px] w-[60px]"
          style={{ color: "white" }}
        />
        <div className="">
          <p className="font-Lato text-[15px] font-black text-white">
            2021-present
          </p>
          <h2 className="font-Poppins font-black text-[20px] text-white">
            Technical Mentor
          </h2>
          <p className="font-Inter font-black text-[14px] text-white">
            Microverse
          </p>
        </div>
      </div>
    </>
  );
}
