import "../css/Add-Delete.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPlayer from "../components/AddPlayer";


const AddDelete = () => {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
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

    const openAddDialog = () => {
        setShowAddDialog(true);
    }
    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    return (
        <div className = "add-delete">
            <hr class="border-line"></hr>
            <div class = "add-delete-title">
                <h2 class="active">Add/Delete Your Own Player!</h2>
            </div> 
            <div class = "add-delete-info">
                <div class="add">
                    <button id="add-player" onClick={openAddDialog}>
                        Add Player
                    </button>
                    {showAddDialog ? (
                        <AddPlayer addPlayer={AddPlayer} closeDialog={closeAddDialog} />
                    ) : (
                        ""
                    )}
                </div>
                <div class="delete">
                <button id="delete-player" onClick={openAddDialog}>
                        Delete Player
                    </button>
                </div>
            </div>
            <hr class="border-line"></hr>
        </div>
    );
};

export default AddDelete; 

