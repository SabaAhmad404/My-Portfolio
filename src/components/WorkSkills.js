import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRubyRough } from "react-icons/di";
import { SiWebpack } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { SiJest } from "react-icons/si";

export default function WorkSkills() {
  return (
    <>
      <div className=" mt-[2rem] ">
        <h1 className="ml-[9rem] text-cyan-900 font-Inter font-black text-[30px] flex items-center justify-center">
          Technologies I Used
        </h1>

        <div className=" animate-move mt-[3rem] grid grid-cols-3 ml-[30rem] gap-[1rem] ">
          <FontAwesomeIcon
            icon={faHtml5}
            className="h-[60px] w-[60px] "
            style={{ color: "#000734" }}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="h-[60px] w-[60px] "
            style={{ color: "#000734" }}
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            className="h-[60px] w-[60px] "
            style={{ color: "#000734" }}
          />
          <FontAwesomeIcon
            icon={faReact}
            className="h-[60px] w-[60px] "
            style={{ color: "#000734" }}
          />
          <SiRedux className="h-[60px] w-[60px]" style={{ color: "#000734" }} />
          <BiLogoPostgresql
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <DiRubyRough
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <SiWebpack
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <SiRubyonrails
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <FaGitAlt
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <BsBootstrapFill
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <SiTailwindcss
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <FaUbuntu
            className="h-[60px] w-[60px]"
            style={{ color: "#000734" }}
          />
          <SiJest className="h-[60px] w-[60px]" style={{ color: "#000734" }} />
        </div>
      </div>
    </>
  );
}
