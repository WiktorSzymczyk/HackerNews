import React from "react";

const filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-option">
        <span>Search</span>
        <select className="select-options">
          <option selected value="All">
            All
          </option>
          <option value="Stories">Stories</option>
          <option value="Comments">Comments</option>
        </select>
      </div>
      <div className="filter-option">
        <span>by</span>
        <select className="select-options">
          <option selected value="Popularity">
            Popularity
          </option>
          <option value="Date">Date</option>
        </select>
      </div>
      <div className="filter-option">
        <span>for</span>
        <select className="select-options">
          <option selected value="All time">
            All time
          </option>
          <option value="Last 24h">Last 24h</option>
          <option value="Past Week">Past Week</option>
          <option value="Past Month">Past Month</option>
          <option value="Past Year">Past Year</option>
          <option value="Custom range">Custom range</option>
        </select>
      </div>
    </div>
  );
};

export default filter;
