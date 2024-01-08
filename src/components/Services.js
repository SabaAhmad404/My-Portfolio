import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center lg:ml-[17rem] justify-center">
        <h2 className="font-black lg:text-[30px] max-sm:text-[20px] text-[#1e293b] font-Lato ">
          Services
        </h2>
        <h1 className="font-black lg:text-[50px] max-sm:text-[25px] text-[#1e293b] font-Poppins">
          I specialize In
        </h1>
      </div>

      <div className="flex flex-col gap-[2rem]  mt-[4rem] max-sm:ml-[2rem]">
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="g:h-[40px] lg:w-[40px] max-sm:h-[25px]  max-sm:w-[20px] bg-[#0f172a] lg:ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black lg:text-[25px] max-sm:text[20px] bg-[#0f172a] text-white">
            End-To-End Developement
          </h1>
        </div>
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="g:h-[40px] lg:w-[40px] max-sm:h-[25px] bg-[#0f172a]   max-sm:w-[20px] lg:ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black lg:text-[25px] max-sm:text[20px] bg-[#0f172a] text-white">
            UI And Responsiveness
          </h1>
        </div>

        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="lg:h-[40px] lg:w-[40px] max-sm:h-[25px]  max-sm:w-[20px] bg-[#0f172a] lg:ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black lg:text-[25px] max-sm:text[20px]  bg-[#0f172a] text-white">
            API Development
          </h1>
        </div>
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="lg:h-[40px] lg:w-[40px] max-sm:h-[25px]  max-sm:w-[20px] bg-[#0f172a] lg:ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black lg:text-[25px] max-sm:text[20px] bg-[#0f172a] text-white">
            DataBase-Integration
          </h1>
        </div>
        <div className="flex gap-[2rem]  ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="lg:h-[40px] lg:w-[40px] max-sm:h-[25px]  max-sm:w-[20px]  bg-[#0f172a] lg:ml-[24rem] "
            style={{ color: "white" }}
          />
          <h1 className="font-Inter font-black lg:text-[25px] max-sm:text[20px]  bg-[#0f172a] text-white">
            Deployment and Hosting
          </h1>
        </div>
      </div>
    </>
  );
}
