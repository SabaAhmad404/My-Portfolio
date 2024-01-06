import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center ml-[17rem] justify-center">
        <h2 className="font-black text-[30px] text-[#1e293b] font-Lato ">
          Services
        </h2>
        <h1 className="font-black text-[50px] text-[#1e293b] font-Poppins">
          I specialize In
        </h1>
      </div>

      <div className="flex flex-col gap-[2rem]  mt-[4rem]">
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-[40px] w-[40px] bg-[#0f172a] ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black text-[25px] bg-[#0f172a] text-white">
            End-To-End Developement
          </h1>
        </div>
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-[40px] w-[40px]  bg-[#0f172a] ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black text-[25px]  bg-[#0f172a] text-white">
            UI And Responsiveness
          </h1>
        </div>

        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-[40px] w-[40px]  bg-[#0f172a] ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black text-[25px]  bg-[#0f172a] text-white">
            API Development
          </h1>
        </div>
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-[40px] w-[40px]  bg-[#0f172a] ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black text-[25px]  bg-[#0f172a] text-white">
            DataBase-Integration
          </h1>
        </div>
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-[40px] w-[40px]  bg-[#0f172a] ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black text-[25px]  bg-[#0f172a] text-white">
            Deployment and Hosting
          </h1>
        </div>
      </div>
    </>
  );
}
