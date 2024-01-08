import React from "react";
import smile from "../images/smile.jpeg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <>
      <header className="w-full bg-slate-300 h-[6rem] ">
        <div className="  flex flex-row gap-[8px] items-center ">
          <div className="mt-[14px] ml-[5px] ">
            <img
              src={smile}
              className="object-cover w-[70px] h-[70px] rounded-full border border-slate-950 p-1 "
              alt="profile"
            />
          </div>
          <h1 className="font-Inter font-black text-slate-950 text-[18px] mt-[1rem]">
            Saba Ahmad
          </h1>

          <div className=" flex items-center justify-center ml-[2.3rem] mt-[1rem] ">
            <FontAwesomeIcon icon={faBars} className="h-[2rem] w-[2rem]" />
          </div>
        </div>
      </header>
    </>
  );
}
