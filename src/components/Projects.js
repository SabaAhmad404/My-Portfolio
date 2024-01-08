import React, { useState } from "react";
import spacetraveler from "../images/spacetravelers.png";
import bookstore from "../images/bookstore.png";
import bugetapp from "../images/bugetapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const popUpOpen = (project) => {
    setSelectedProject(project);
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  const projects = [
    {
      image: spacetraveler,
      title: "Space Travelers",
      liveDemo: "https://space-travelers-hub-z8qg.onrender.com/",
      github: "https://github.com/SabaAhmad404/Space-Travelers-Hub",
      para: "Space Travelers' Hub: Web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions",
    },
    {
      image: bookstore,
      title: "Book Store",
      liveDemo: "https://book-store-webapp.onrender.com/",
      github: "https://github.com/SabaAhmad404/Bookstore-React",
      para: "The Bookstore: is a react comprehensive web platform designed to facilitate book browsing and selection. It allows visitors to explore an extensive collection of books, manage their personal reading lists, and add their preferred books",
    },
    {
      image: bugetapp,
      title: "Buget App",
      liveDemo: "https://rails-budget-app-mnta.onrender.com/",
      github: "https://github.com/SabaAhmad404/Budget-App",
      para: "My Budget: is a web-based rails application designed to help users manage their finances and track their expenses. It provides features such as user signup and login functionality to ensure secure access to personal budget information.",
    },
  ];

  return (
    <>
      <div className="flex lg:ml-[17rem] items-center   max-sm:ml-[6rem] lg:justify-center mt-[2rem]">
        <h1 className="font-black font-Poppins lg:text-[40px] max-sm:text-[20px] text-gray-200">
          My Projects
        </h1>
      </div>
      <div className="flex lg:flex-row max-sm:flex-col items-center justify-center lg:ml-[19rem] gap-[2rem] mt-[4rem]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white p-4 rounded-lg shadow-md"
            style={{ width: "300px", height: "300px" }}
          >
            <img
              src={project.image}
              className="h-40 w-[17rem] object-contain rounded-t-lg mb-4"
              alt={project.title}
            />
            <h2 className="text-lg font-Lato font-black text-[20px] text-gray-800 bold">
              {project.title}
            </h2>
            <div className="opacity-0 group-hover:opacity-100 mt-[1rem] ">
              <button
                onClick={() => popUpOpen(project)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                See My Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {isPopUpOpen && (
        <div className="fixed inset-0  flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex justify-end">
              <button
                onClick={closePopUp}
                className="absolute lg:top-8 lg:right-20 max-sm:right-[13rem] max-sm:top-[34rem]   text-gray-200 hover:text-[#94a3b8]"
              >
                <FontAwesomeIcon icon={faCircleXmark} className="h-[2rem]" />
              </button>
            </div>

            {selectedProject && (
              <>
                <img
                  src={selectedProject.image}
                  className="lg:h-[13rem] lg:w-[30rem] max-sm:h-[4rem] max-sm:w-[13rem] object-contain rounded-t-lg mb-4"
                  alt={selectedProject.title}
                />
                <h2 className="text-lg font-Lato font-black text-[20px] text-gray-800 bold">
                  {selectedProject.title}
                </h2>

                <div
                  className="overflow-auto lg:h-[8rem] lg:w-[30rem] max-sm:h-[4rem] max-sm:w-[13rem] text-sm text-gray-600 mt-4"
                  dangerouslySetInnerHTML={{ __html: selectedProject.para }}
                />
                <div className="flex flex-row items-center gap-[10px]">
                  <div className="flex flex-row items-center gap-[6px] ">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      style={{ color: "#475569" }}
                    />
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-[#475569] font-black font-Lato hover:text-[#0f172a]">
                        Live Demo
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-row items-center gap-[6px]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{
                        color: "#475569",
                      }}
                    />
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-[#475569] font-black font-Lato hover:text-[#0f172a]">
                        Github
                      </p>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center lg:ml-[17rem] mt-[3rem]">
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
