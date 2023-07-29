import React, { useContext, useState } from 'react';
import './Modal.css'; 
import { DataContext } from '../../context/Context';

import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const {state, dispatch} = useContext(DataContext)

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPlaylistName('');
  };

  const handleSave = () => {
    console.log(playlistName)
    
    const newPlaylist = {
        name: playlistName,
        videos: [],
    }
      console.log(newPlaylist)

     
      dispatch({ type: "ADD_TO_PLAYLIST", payload: {
        name: playlistName,
        videos: [],
    } })
     

      closeModal();
    }
  

  return (
    <div>
        <ControlPointIcon  onClick={openModal}/>
      

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create New Playlist</h2>
            <input
              type="text"
              placeholder="Playlist Name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
