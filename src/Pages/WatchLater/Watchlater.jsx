import { useNavigate } from "react-router-dom"
import { videos } from "../../data/videos"
import "../Home/Home.css"
import VideoThumbnail from "../../components/videoThumbnail/Thumbnail"
import { useContext } from "react"
import { DataContext } from "../../context/Context"

export const WatchLater = () => {
    const navigate = useNavigate();
    const {state} = useContext(DataContext)
    const watchLaterVideos = state.data.filter((item) => item.inWatchLater === true)
    return (
        <div className="homeContainer">
            <h1>Watch Later</h1>
            
                <ul className="categoriesList">
                    {
                         watchLaterVideos.map((item) => (
                            <li key={item._id} >
                                 <VideoThumbnail video={item} />
                            </li>
                        ))
                    }
                </ul>
            
        </div>
    )
}