import { useParams } from "react-router-dom";
import { videos } from "../../data/videos";
import { RightVideosBar } from "../../components/RightVideosBar/RightVideos";
import "./IndieVideoPage.css";
import ReactPlayer from "react-player";



export const IndieVideoPage = () => {
    const {videoId} = useParams();
    const requiredVideo = videos.find(item => item._id === Number(videoId));
    console.log(requiredVideo)

    return (
        <div className="indieVideoContainer">
            
            <div className="videoPlayingContainer">
            <div>
      <ReactPlayer
        url={requiredVideo.src}
        
        controls={true}
      />
      <h2>{requiredVideo.title}</h2>
    </div>

            </div>
            <div className="rightVideoBar">
                <h3>More Videos:</h3>
               <RightVideosBar/>
            </div>
        </div>
    )
}