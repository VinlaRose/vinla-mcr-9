import React from 'react';
import './Thumbnail.css'; 

const VideoThumbnail = ({ video }) => {
  return (
    <div className="video-thumbnail-container">
        
      <div className="video-thumbnail-image-container">
        <img className="video-thumbnail-image" src={video.thumbnail} alt={video.title} />
        <div className='watchLaterButton'>X</div>
        
        
      </div>

      <div className="video-thumbnail-details">
        <div className="thumbnailLeft">
        <div className="video-thumbnail-creator-circle">
          <img className="video-thumbnail-creator-image" src={video.creatorImage} alt={video.creator} />
        </div>
        </div>

        <div className="thumbnailRight">
        <div className="video-thumbnail-title">{video.title}</div>
        <div className="video-thumbnail-title">{video.category}</div>
        <div className="video-thumbnail-stats">
          <span>{video.views} views</span> 
          <span>{video.creator} </span>
        </div>

        </div>

      

        
      </div>
    </div>
  );
};

export default VideoThumbnail;
