import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtemisHomepage from "./Pages/Home/home.js";
import MissionPage from "./Pages/Mission/mission.js"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtemisHomepage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
