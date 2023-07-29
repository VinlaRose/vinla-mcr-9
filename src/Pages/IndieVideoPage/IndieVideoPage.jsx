import { useParams } from "react-router-dom";
import { videos } from "../../data/videos";
import { RightVideosBar } from "../../components/RightVideosBar/RightVideos";
import "./IndieVideoPage.css";
import ReactPlayer from "react-player";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useContext, useState } from "react";
import { DataContext } from "../../context/Context";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';



export const IndieVideoPage = () => {
    const {videoId} = useParams();
    const {state, dispatch} = useContext(DataContext)
    const requiredVideo = state.data.find(item => item._id === Number(videoId));
    console.log(requiredVideo);
    const [showModal, setShowModal] = useState(false);
    const [newNotes, setNewNotes] = useState(" ")
    const openModal = () => {
        setShowModal(true)
    }
    const saveNotes = () => {
        console.log(newNotes);
        setNewNotes(' ');
      
        const updateData = state.data.map(item => {
          if (item._id === Number(videoId)) {
            const updatedItem = {
              ...item,
              notes: [...item.notes, newNotes], 
            };
            return updatedItem;
          } else {
            return item; 
          }
        });
      
        dispatch({ type: "ADD_NOTES", payload: updateData });
        setShowModal(false)
      };
      const deleteNote = (i) => {
        console.log(i)
        const updatedData = state.data.map(item => {
          if (item._id === Number(videoId)) {
            
            const updatedItem = {
              ...item,
              notes: item.notes.filter(( index) => index !== i),
            };
            console.log(updatedItem)
            return updatedItem;
          } else {
            return item; 
          }
        });
      
        dispatch({ type: "ADD_NOTES", payload: updatedData });
      };
      

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
        <EditNoteIcon onClick={openModal}/>
        {
            showModal && (
                <div>
                    Add Notes:
                    <input
              type="text"
              placeholder="New Notes"
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
            />
            <button onClick={saveNotes}>Submit</button>
                </div>
            )
        }
        {
            requiredVideo.notes.length !== 0 && <h3>My Notes</h3>
        }
        
       {requiredVideo.notes.map((item, index) => (
        <div className="notes"  key={index}>
        <span>{item}</span> 
        <span><DeleteIcon onClick={() => deleteNote(index)}/></span>
        </div>
        
      ))}

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