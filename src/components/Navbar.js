import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function Navbar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const handleButton = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-end gap-[2rem] mt-[1rem] pr-[3rem]">
        <ul>
          <Link
            to="/"
            onClick={() => handleButton("/")}
            className={activeButton === "/" ? "active" : ""}
          >
            <button
              type="button"
              className="flex flex-col  items-center  justify-center gap-[10px]"
            >
              <FontAwesomeIcon
                icon={faHouse}
                style={{ color: "#bae6fd" }}
                className="h-[1.6rem] w-[1.6rem]"
              />
              <p className="text-white">Home</p>
            </button>
          </Link>
        </ul>
        <ul>
          <Link
            to="/resume"
            onClick={() => handleButton("/resume")}
            className={activeButton === "/resume" ? "active" : ""}
          >
            <button
              type="button"
              className="flex flex-col items-center  justify-center gap-[10px]"
            >
              <FontAwesomeIcon
                icon={faCog}
                style={{ color: "#bae6fd" }}
                className="h-[1.6rem] w-[1.6rem]"
              />
              <p className="text-white">Skills</p>
            </button>
          </Link>
        </ul>
        <ul>
          <Link
            to="/work"
            onClick={() => handleButton("/work")}
            className={activeButton === "/work" ? "active" : ""}
          >
            <button
              type="button"
              className="flex flex-col items-center justify-center gap-[10px]"
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ color: "#bae6fd" }}
                className="h-[1.6rem] w-[1.6rem]"
              />
              <p className="text-white">Projects</p>
            </button>
          </Link>
        </ul>
        <ul>
          <Link
            to="/contact"
            onClick={() => handleButton("/contact")}
            className={activeButton === "/contact" ? "active" : ""}
          >
            <button
              type="button"
              className="flex flex-col items-center  justify-center gap-[10px]"
            >
              <FontAwesomeIcon
                icon={faUsers}
                style={{ color: "#bae6fd" }}
                className="h-[1.6rem] w-[1.6rem]"
              />
              <p className="text-white">Contact</p>
            </button>
          </Link>
        </ul>
      </nav>
    </>
  );
}
