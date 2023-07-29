import { useNavigate } from "react-router-dom"
import { videos } from "../../data/videos"
import "../Home/Home.css"
import VideoThumbnail from "../../components/videoThumbnail/Thumbnail"

export const Explore = () => {
    const navigate = useNavigate();
    return (
        <div className="homeContainer">
            <h1>Explore</h1>
            
                <ul className="categoriesList">
                    {
                         videos.map((item) => (
                            <li key={item._id} onClick={() => navigate(`/${item.category}/${item._id}`)}>
                                 <VideoThumbnail video={item} />
                            </li>
                        ))
                    }
                </ul>
            
        </div>
    )
}