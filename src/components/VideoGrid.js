import React, { useState } from "react";
import "../styles/VideoGrid.css";

import VideoCard from "./VideoCard";
import VideoFilter from "./VideoFilter";

const VideoGrid = ({ videos }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleVideos, setVisibleVideos] = useState(9);

  const handleCategoryFilter = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category === "Tutti i video" ? null : category);
    }
    setVisibleVideos(9);
  };

  const handleShowMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 3);
  };

  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.category === selectedCategory)
    : videos;

  const displayedVideos = filteredVideos.slice(0, visibleVideos);

  return (
    <div className="video-grid-container">
      <h3 className="video-grid-header">Filtra per</h3>
      <VideoFilter
        activeFilter={selectedCategory}
        handleCategoryFilter={handleCategoryFilter}
      />
      <br />
      <div className="video-grid">
        {displayedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className="show-more-container">
        {filteredVideos.length > visibleVideos && (
          <button onClick={handleShowMoreVideos}>Mostra Altri</button>
        )}
      </div>
    </div>
  );
};

export default VideoGrid;
