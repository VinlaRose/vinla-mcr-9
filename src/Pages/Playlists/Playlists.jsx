import { useContext } from "react"
import { DataContext } from "../../context/Context"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Modal from "./AddToPlayListModal";
import './Modal.css'; 

export const Playlists = () => {
    const {state} = useContext(DataContext);
    console.log(state)
   
    return (
        <div className="playlistsContainer">
            <h1>Playlists</h1>
          
            

            {state?.playList.map((item) => (
                <div>
                    
                    <img className="paylistThumbnail" src="https://png.pngtree.com/background/20211217/original/pngtree-note-music-logo-watercolor-background-picture-image_1589075.jpg" alt="/" />
                    <div>{item.name}</div>
                    
                </div>
            ))}

<Modal/>


        </div>
    )
}