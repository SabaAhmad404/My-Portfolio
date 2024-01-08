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
import "../App.css"

export default function WorkSkills() {
  return (
    <>
      <div className=" mt-[2rem] ">
        <h1 className="lg:ml-[13rem] ml-[4rem] text-slate-900 font-Inter font-black lg:text-[30px] flex lg:items-center lg:justify-center">
          Technologies I Used
        </h1>

        <div className="animate-move mt-[3rem] grid grid-cols-3 lg:ml-[32rem] ml-[8px] gap-[1rem] max-sm:w-[300px] ">
          <FontAwesomeIcon
            icon={faHtml5}
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px]  "
            style={{ color: "#000734" }}
          />
          <FontAwesomeIcon
            icon={faReact}
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px]  "
            style={{ color: "#000734" }}
          />
          <SiRedux className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] " style={{ color: "#000734" }} />
          <BiLogoPostgresql
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <DiRubyRough
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <SiWebpack
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <SiRubyonrails
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <FaGitAlt
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <BsBootstrapFill
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <SiTailwindcss
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <FaUbuntu
            className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] "
            style={{ color: "#000734" }}
          />
          <SiJest className="lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] " style={{ color: "#000734" }} />
        </div>
      </div>
    </>
  );
}
