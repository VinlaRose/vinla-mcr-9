import { useNavigate } from "react-router-dom"
import { videos } from "../../data/videos"
import "../Home/Home.css"
import VideoThumbnail from "../../components/videoThumbnail/Thumbnail"
import { useContext } from "react"
import { DataContext } from "../../context/Context"

export const Explore = () => {
    const navigate = useNavigate();
    const {state} = useContext(DataContext)
    return (
        <div className="homeContainer">
            <h1>Explore</h1>
            
                <ul className="categoriesList">
                    {
                         state.data.map((item) => (
                            <li key={item._id} >
                                 <VideoThumbnail video={item} />
                            </li>
                        ))
                    }
                </ul>
            
        </div>
    )
}