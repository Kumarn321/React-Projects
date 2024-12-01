import React, { useState } from "react";
import "./styles.css";
import JobList from "./JobList";
import Navbar from "./Navbar";
import { FaFilter } from "react-icons/fa";


const App = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="filter-container">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter jobs..."
      />
      <span className="filter-icon">
        <FaFilter /> {/* Filter icon from react-icons */}
      </span>
    </div>
      <JobList filter={filter} />
    </div>
  );
};

export default App;