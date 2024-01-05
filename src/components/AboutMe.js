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
      <div className="  mt-[2rem] ml-[8rem] flex flex-col items-center justify-end text-white">
        <div className="introduction">
          <div className="paragraph">
            <h1 className="font-Lato text-slate-300 text-[3rem] font-black">
              Hello, I&apos;m <span className="text-slate-300">Saba Ahmad</span>
            </h1>
            <h2 className="font-Inter text-[2rem] font-black text-neutral-300 font-blacl text-[1.8rem]">
              A<span> {text} </span>
              <Cursor
                className="text-neutral-300"
                cursorBlinking="false"
                cursorStyle="|"
              />
            </h2>
            <Introduction />
            <div className="flex flex-row gap-[1rem] items-center mt-[1rem]">
              <div className="w-[12px] h-[12px] bg-[#0f0] rounded-[50%] mr-[5px] inline-block " />

              <span className="text-neutral-300">
                Available for New Projects
              </span>
            </div>
            <div className="collaborate">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#a1a1aa" }}
                onClick={handleGithub}
                className="h-[32px] w-[32px] mt-[1rem] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
