import { useNavigate } from "react-router-dom"
import { videos } from "../../data/videos"
import "./RightVideos.css"

export const RightVideosBar = () => {
    const navigate = useNavigate();
    return (

        
        <div className="rightVideoBarContainer">
            {
                videos.map(video => (
                    <div className="rightVideo" key = {video._id} onClick={() => navigate(`/${video.category}/${video._id}`)}>
                    <div className="rightVideoImage"><img className="videoImage" src={video.thumbnail} alt={video.title} /></div>
                    <div className="rightVideoDetails">
                        <p className="title">{video.title}</p>
                        <p className="creator">{video.creator}</p>
                    
                    </div>
    
    
                </div>
                ))
            }
            
        </div>
    )
}