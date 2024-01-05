import "./App.css";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import backgroundImage from "../src/images/11.jpg";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <div className="flex flex-row">
      <div><Me /></div>

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
            <AboutMe/>
          </div>
          <div className="h-[1000px]  bg-gray-800">
            <p className="text-white">its second div</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
