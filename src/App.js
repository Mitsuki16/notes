import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AddNote from "./AddNote";

function App() {
  return (
    <div className=" bg-violet-100 h-screen ">
      <div className="  h-[100vh] flex items-center justify-around  ">
        <div
          className="  sm:w-[25em] w-full h-full sm:h-auto 
          sm:max-h-[50pc] min-h-[40pc] overflow-y-auto sm:rounded-xl
         bg-[#012b3a] text-white border-2 static border-black "
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/AddEditNote" element={<AddNote />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
