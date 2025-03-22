import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtemisHomepage from "./Pages/Home/home.js";
import ArtemisMissionPage from "./Pages/Mission/mission.js"; 
import ArtemisSimulation from "./Pages/Simulation/simulation.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtemisHomepage />} />
        <Route path="/mission" element={<ArtemisMissionPage />} />
        <Route path="/simulation" element={<ArtemisSimulation />} />
      </Routes>
    </Router>
  );
};

export default App;
