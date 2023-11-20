import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import smile from "../images/smile.jpeg";
import TimeZone from "./TimeZone";

export default function Me() {
  const handleFaceBook = () => {
    const faceBookURL =
      "https://web.facebook.com/profile.php?id=100023964162678";
    window.open(faceBookURL, "blank");
  };

  const handleTwitter = () => {
    const twitterURL = "https://twitter.com/SabaAhmad00";
    window.open(twitterURL, "blank");
  };

  const handleLinkdin = () => {
    const linkdinURL = "https://www.linkedin.com/in/sabaahmad404/";
    window.open(linkdinURL, "blank");
  };

  const handleGithub = () => {
    const githubURL = "https://github.com/SabaAhmad404";
    window.open(githubURL, "blank");
  };
  const handleGmail = () => {
    const gmailURL = "sabaahmad895@gmail.com";
    const inbox = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailURL}`;
    window.open(inbox, "blank");
  };

  return (
    <>
      <header className="bg-slate-950 h-full fixed w-[300px]">
        <div className="flex flex-row items-center justify-around ">
          <div className=" mt-[2rem]">
            <img
              src={smile}
              className="object-cover w-[70px] h-[70px]  "
              alt="profile"
            />
          </div>

          <div className=" w-[130px] mt-[1rem] flex flex-col items-center  ">
            <h1 className="font-poppins font-black text-xl text-white ">
              Saba Ahmad
            </h1>
            <p className=" font-medium text-[#a1a1aa] text-[16px]">
              Frontend Dev
            </p>
          </div>
        </div>

        <div className="mt-[37px] flex items-center justify-center flex-col">
          <div className=" flex flex-row items-center gap-[2rem] pb-[10px] ml-[2rem] mt-[2rem]">
            <div className="mail-box">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#a1a1aa" }}
                className="h-[1.6rem] w-[1.6rem]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="my-info text-[#a1a1aa]">Email</span>
              <span className="my-info text-[#a1a1aa]">
                sabaahmad895@gmail.com
              </span>
            </div>
          </div>
          <hr className=" w-[230px] h-[2px] bg-[#a1a1aa] rounder-[4%]" />

          <div className=" flex flex-row items-center gap-[2rem] pb-[10px] mt-[2rem]">
            <div className="clock-imge">
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "#a1a1aa", height: "1.7rem", width: "1.7rem" }}
                className="clock"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="my-info text-[#a1a1aa]">Time</span>
              <TimeZone timeZoneOffset={5} />
            </div>
          </div>

          <hr className=" w-[230px] h-[2px] bg-[#a1a1aa] rounder-[4%]" />

          <div className="flex flex-row  items-center gap-[2rem] mr-[4rem] pb-[10px] mt-[2rem]">
            <div className="location-imge">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#a1a1aa" }}
                className="h-[1.6rem] w-[1.6rem]"
              />
            </div>
            <div className="flex flex-col  gap-[6px]">
              <span className="my-info text-[#a1a1aa]">Location</span>
              <span className="my-info text-[#a1a1aa] text-sm">
                Punjab, Pakistan
              </span>
            </div>
          </div>
          <hr className=" w-[230px] h-[2px] bg-[#a1a1aa] rounder-[4%]" />

          <div className="flex justify-center items-center gap-[20px] mt-[5rem]">
            <button type="button">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#a1a1aa" }}
                onClick={handleLinkdin}
                className="h-[26px] w-[26px] flex items-center"
              />
            </button>

            <button type="button">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#a1a1aa" }}
                onClick={handleTwitter}
                className="h-[26px] w-[26px] flex items-center"
              />
            </button>

            <button type="button">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#a1a1aa" }}
                onClick={handleGithub}
                className="h-[26px] w-[26px] flex items-center"
              />
            </button>
            <button type="button">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#a1a1aa" }}
                onClick={handleGmail}
                className="h-[26px] w-[26px] flex items-center"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
