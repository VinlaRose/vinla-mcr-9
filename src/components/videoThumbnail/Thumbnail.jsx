import React, { useContext, useEffect } from 'react';
import './Thumbnail.css'; 
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Context';

const VideoThumbnail = ({ video }) => {

  const {state,dispatch} = useContext(DataContext)
  const navigate = useNavigate()
  const addToWatchList = (id) => {
    
    const theVideo = state.data.find(item => item._id === Number(id));
    if (theVideo) {
      if (!state.wishList.find(item => item._id === theVideo._id)) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: theVideo });
      } else {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: theVideo });
      }
    }
    
    const updateData = state.data.map(item => {
      if (item._id === Number(id)) {
        return {
          ...item,
          inWatchLater: !item.inWatchLater
        };
      } else {
        return item; // Return the item as it is when not updating
      }
    });



    dispatch({type: "FETCH_DATA", payload: updateData})
    
    

  }
  
  
  return (
    <div className="video-thumbnail-container">
        
      <div className="video-thumbnail-image-container">
        <img className="video-thumbnail-image" src={video.thumbnail} alt={video.title} />
        <div className='watchLaterButton' onClick={() => addToWatchList(video._id)}>
          {
            video.inWatchLater ? <WatchLaterOutlinedIcon/> : <WatchLaterIcon/>
          }
         
        </div>
        
        
      </div>

      <div className="video-thumbnail-details">
        <div className="thumbnailLeft">
        <div className="video-thumbnail-creator-circle">
          <img className="video-thumbnail-creator-image" src={video.creatorImage} alt={video.creator} />
        </div>
        </div>

        <div className="thumbnailRight" >
        <div className="video-thumbnail-title" onClick={() => navigate(`/${video.category}/${video._id}`)}>{video.title}</div>
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
