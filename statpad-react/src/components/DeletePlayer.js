import "../css/Dialog.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DeletePlayer = (props) => {
  const [result, setResult] = useState("");
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const deletePlayer = async() => {
    console.log("DEBUG: Sending delete request for player ID:", selectedPlayer, "Type:", typeof selectedPlayer);
    const response = await fetch(`https://statpad-react-back.onrender.com/api/players/${selectedPlayer}`,{  
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Player successfully deleted.");
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your player at this time.");
   }
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://statpad-react-back.onrender.com/api/players");
      setPlayers(response.data);
    })();
  }, []); 

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <select 
              className="w3-select" 
              onChange={(e) => setSelectedPlayer(e.target.value)}
            >
              <option value="remove-dropdown">Select Player to Remove</option>
              {players.map((player) => (
                <option key={player._id} value={player._id}>
                  {player.name}
                </option>
              ))}
            </select>
            <button 
              className="w3-button" 
              onClick={deletePlayer}
            >
              Delete Selected Player
            </button>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePlayer;