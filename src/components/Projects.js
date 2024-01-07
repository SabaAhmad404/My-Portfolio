import React from "react";
import spacetraveler from "../images/spacetravelers.png";
import bookstore from "../images/bookstore.png";
import bugetapp from "../images/bugetapp.png";

export default function Projects() {
  return (
    <>
      <div className="flex ml-[17rem] items-center justify-center">
        <h1 className="font-black font-Poppins text-[40px] text-gray-200">
          My Projects
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center ml-[19rem] gap-[2rem] mt-[4rem]">
        <div
          className="bg-white p-4 rounded-lg shadow-md"
          style={{ width: "300px", height: "300px" }}
        >
          <img
            src={spacetraveler}
            className="h-48 w-full object-contain rounded-t-lg mb-4"
            alt="Space Travelers"
          />
          <h2 className="text-lg font-Lato font-black text-[20px] text-gray-800 bold">Space Travelers</h2>
        </div>

        <div
          className="bg-white p-4 rounded-lg shadow-md"
          style={{ width: "300px", height: "300px" }}
        >
          <img
            src={bookstore}
            className="h-48 w-full object-contain rounded-t-lg mb-4"
            alt="Space Travelers"
          />
          <h2 className="text-lg font-Lato font-black text-[20px] text-gray-800 bold">Book Store</h2>
        </div>

        <div
          className="bg-white p-4 rounded-lg shadow-md"
          style={{ width: "300px", height: "300px" }}
        >
          <img
            src={bugetapp}
            className="h-48 w-full object-contain rounded-t-lg mb-4"
            alt="Space Travelers"
          />
          <h2 className="text-lg font-Lato font-black text-[20px] text-gray-800 bold">Buget App</h2>
        </div>
      </div>
      <div className="flex items-center justify-center ml-[17rem] mt-[3rem]">
        <p className="font-black font-Lato text-white">
          Check my{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-white"
          >
            GitHub
          </a>{" "}
          for more
        </p>
      </div>
    </>
  );
}
