import { useParams } from "react-router-dom";
import { videos } from "../../data/videos";
import { RightVideosBar } from "../../components/RightVideosBar/RightVideos";
import "./IndieVideoPage.css";
import ReactPlayer from "react-player";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';



export const IndieVideoPage = () => {
    const {videoId} = useParams();
    const {state} = useContext(DataContext)
    const requiredVideo = state.data.find(item => item._id === Number(videoId));
    console.log(requiredVideo)

    return (
        <div className="indieVideoContainer">
            
            <div className="videoPlayingContainer">
            <div>
      <ReactPlayer
        url={requiredVideo.src}
        
        controls={true}
      />
      <div className="videoBar">
      <h2>{requiredVideo.title}</h2>

      <div className="rightsideBar">
        {requiredVideo.inWatchLater ? <WatchLaterIcon/> : <AccessTimeIcon/> }
        {requiredVideo.inPlaylist ? <PlaylistAddCheckIcon/> : <PlaylistAddIcon/> }


      </div>

      </div>
      
    </div>

            </div>
            <div className="rightVideoBar">
                <h3>More Videos:</h3>
               <RightVideosBar/>
            </div>
        </div>
    )
}