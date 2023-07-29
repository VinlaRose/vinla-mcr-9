import { useNavigate } from "react-router-dom"
import "./leftnav.css"
export const LeftNav = () => {
    const navigate = useNavigate()
    return(
        <div className="leftNavContainer">
                <div onClick={() => navigate("/")}>Home</div>
                <div onClick={() => navigate("/explore")}>Explore</div>
                <div onClick={() => navigate("/playlist")}>Playlist</div>
                <div onClick={() => navigate("/watchlater")}>Watch Later</div>
        </div>
    )
}