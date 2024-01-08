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
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className=" hidden lg:block">
          <Me />
        </div>

        <div className="flex flex-col lg:w-screen  max-sm:w-[375px] bg-gray-800   ">
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="lg:h-screen h-[500px]"
          >
            <div className="hidden max-sm:block">
              <Header />
            </div>
            <div className="hidden lg:block">
              <Navbar />
            </div>
            <AboutMe />
          </div>
          <div className="lg:h-screen max-sm:h-[500px]  bg-[#e8edec] ">
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
            className="lg:h-[600px] max-sm:h-[1200px]"
          >
            <Projects />
          </div>

          <div className="h-[700px] bg-[#e8edec]">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
