import "./App.css";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import backgroundImage from "../src/images/newrr.jpg";
import AboutMe from "./components/AboutMe";
import WorkSkills from "./components/WorkSkills";
import Education from "./components/Education";
import education from "./images/education.jpg";
import Services from "./components/Services";
import service from "./images/finalbg.jpg";
import Projects from "./components/Projects";
import blue from "./images/blue.jpg";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Me />
        </div>

        <div className="flex flex-col w-screen bg-gray-800  ">
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-screen"
          >
            <Navbar />
            <AboutMe />
          </div>
          <div className="h-screen bg-[#e8edec] ">
            <WorkSkills />
          </div>
          <div
            style={{
              backgroundImage: `url(${education})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-screen"
          >
            <Education />
          </div>
          <div
            style={{
              backgroundImage: `url(${service})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-screen "
          >
            <Services />
          </div>
          <div
            style={{
              backgroundImage: `url(${blue})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
            className="h-[600px]"
          >
            <Projects />
          </div>

          <div  
            className="h-[700px] bg-[#e8edec]">
            <ContactUs/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
