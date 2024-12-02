import React, { useState, useEffect } from 'react';
import "../css/Player-College.css";
import EditPlayer from "../components/EditPlayer";

const PlayerCollege = () => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);

    const updatePlayer = (updatedPlayer) => {
        setPlayers(players.map(player => 
            player._id === updatedPlayer._id ? updatedPlayer : player
        ));
    };

    const PlayerCard = ({ player }) => {
        const [showEditDialog, setShowEditDialog] = useState(false);
        const openEditDialog = () => {
            setShowEditDialog(true);
        };
        const closeEditDialog = () => {
            setShowEditDialog(false);
        };

        return (
            <div className="player-card">
                <h2 className="active">{player.name}</h2>
                <a href={player["imagelink"]}>
                    <img src={`https://statpad-react-back.onrender.com/${player.image}`} alt={player.name} />
                </a>
                <p>{player.description}</p>
                <p>
                    <a href={player["imagelink"]}>Click to see highlights.</a>
                </p>
                <div className="edit-player">
                    <button id="edit-button" onClick={openEditDialog}>
                        Edit Player
                    </button>
                        {showEditDialog ? (
                            <EditPlayer 
                                editPlayer={EditPlayer} 
                                closeDialog={closeEditDialog}
                                updatePlayer={updatePlayer}
                                _id={player._id}
                                name={player.name}
                                imagelink={player.imagelink}
                                description={player.description}
                                image={player.image}
                            />
                        ) : (
                            ""
                        )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch('https://statpad-react-back.onrender.com/api/players');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPlayers(data);
                setIsLoading(false);
            } catch (error) {
                setError('Failed to fetch players data');
                setIsLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (isLoading) {
        return <div className="player-college">Loading...</div>;
    }
    if (error) {
        return <div className="player-college">Error: {error}</div>;
    }

    const openEditDialog = () => {
        setShowEditDialog(true);
    };
    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    return (
        <div className="player-college">
            <hr className="border-line" />
            <div className="player-title">
                <h2 className="active">Star Players!</h2>
            </div>
            <div className="players">
                {players.map((player) => (
                    <PlayerCard key={player._id} player={player}/>
                ))}
            </div>
            <hr className="border-line" />
        </div>
    );
};

export default PlayerCollege;