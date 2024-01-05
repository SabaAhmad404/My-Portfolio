import "./App.css";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import backgroundImage from "../src/images/newrr.jpg";
import AboutMe from "./components/AboutMe";
import WorkSkills from "./components/WorkSkills";

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
          <div className="h-screen bg-cyan-100">
            <WorkSkills/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
