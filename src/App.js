import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {



  return (
    <div className="Main">

      <Navbar />

      <Routes>
        {/* <Route path="inference" element={ <InferencePlot/> } /> */}
      </Routes>

     
    </div>
  );
};

export default App;
