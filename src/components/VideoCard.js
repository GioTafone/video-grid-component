import React from "react";
import "../styles/VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-item">
      <h3 className="video-title">Gioca con {video.category}</h3>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.id}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
