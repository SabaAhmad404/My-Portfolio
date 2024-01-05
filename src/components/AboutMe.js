import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Introduction from "./Introduction";
import github from "../images/github.png";

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
            <h1 className="font-Lato text-[3rem] font-black">
              Hello, I&apos;m{" "}
              <span className="Saba">
                Saba Ahmad
              </span>
            </h1>
            <h2 className="font-Inter font-blacl text-[1.8rem]">
              A<span> {text} </span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#FFD700"
              />
            </h2>
            <Introduction />
            <div className="flex flex-row gap-[1rem] items-center mt-[1rem]">
              <div className="w-[12px] h-[12px] bg-[#0f0] rounded-[50%] mr-[5px] inline-block " />

              <span className="new-projects">Available for New Projects</span>
            </div>
            <div className="collaborate">
              <img
                src={github}
                onClick={handleGithub}
                alt="github"
                className="h-[32px] w-[32px] mt-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
