import React from "react";
import "../styles/VideoFilter.css";

const VideoFilter = ({ activeFilter, handleCategoryFilter }) => {
  const categories = [
    "0,50 €",
    "1 €",
    "2 €",
    "3 €",
    "5 €",
    "10 €",
    "25 €",
    "Tutti i video",
  ];

  return (
    <div className="video-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryFilter(category)}
          className={activeFilter === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default VideoFilter;
