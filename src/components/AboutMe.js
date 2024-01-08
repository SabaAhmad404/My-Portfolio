import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Introduction from "./Introduction";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const handleGithub = () => {
    const githubURL = "https://github.com/SabaAhmad404";
    window.open(githubURL, "blank");
  };

  return (
    <>
      <div className=" lg:mt-[2rem] lg:ml-[8rem] ml-[1rem] mt-[5rem]  flex flex-col lg:items-center lg:justify-center text-white">
        <div className="introduction">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-Lato text-slate-300 lg:text-[3rem] text-[23px] font-black">
              Hello, I&apos;m <span className="text-slate-300">Saba Ahmad</span>
            </h1>
            <h2 className="font-Inter lg:text-[2rem] text-[17px]  text-neutral-300 font-black ">
              A<span> {text} </span>
              <Cursor
                className="text-neutral-300"
                cursorBlinking="false"
                cursorStyle="|"
              />
            </h2>
            <Introduction />
            <div className="flex flex-row lg:gap-[9px] gap-[7px] items-center mt-[1rem]">
              <div className="w-[12px] h-[12px] bg-[#0f0] rounded-[50%] mr-[5px] inline-block " />

              <span className="text-neutral-300 text-[14px] max-sm:text-[12px]">
                Available for New Projects
              </span>
            </div>
            <div className="collaborate">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#a1a1aa" }}
                onClick={handleGithub}
                className="lg:h-[32px] lg:w-[32px] h-[25px] w-[25px] lg:mt-[1rem] mt-[8px] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
