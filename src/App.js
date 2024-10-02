import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import MainContent from "./components/MainContent";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageSelect = (page) => {
    console.log(`Page selected: ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <TopBar onSelectPage={handlePageSelect} />
      <div className="content-container">
        {/* <Sidebar onSelectPage={handlePageSelect} /> */}
        <MainContent page={currentPage} />
      </div>
    </div>
  );
}

export default App;
