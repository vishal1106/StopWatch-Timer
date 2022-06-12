import React from "react"
// import Stopwatch from "./components/Stopwatch";
import './App.css';
import Navbar from "./components/Navbar";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import {Routes,Route} from "react-router-dom"
function App() {
 
  return (
    <div className="App">
  {/* <Stopwatch/> */}
  <Navbar/>
  <Routes>
    <Route path="/stopwatch" element={<Stopwatch/>}></Route>
    <Route path="/timer" element={<Timer/>}></Route>
  </Routes>
    </div>
  );
}

export default App;