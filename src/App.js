import "./App.css";
import Me from "./components/Me"


function App() {
  return (
    <div className="flex flex-col">
      <div className="flex">
      {/* <header className="fixed h-full w-[330px] bg-slate-700">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>me</li>
        </ul>
      </header> */}
      <Me />
      </div>

      <div className="flex flex-col ">
      <div className="flex items-center flex-start" >
        {/* <img className="h-[15rem] w-[25rem] " src={contactf}/> */}
      </div>
        <div className="h-[2000px] bg-red-500">
          <p>its div</p>
        </div>
      </div>
    </div>
  );
}

export default App;
