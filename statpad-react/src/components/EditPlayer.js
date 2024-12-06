import "../css/Dialog.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPlayer = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        name: props.name,
        imagelink: props.imagelink,
        description: props.description,
    });
    const [result, setResult] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        console.log("Before inputs.img");
        if (!inputs.img) {
            formData.append('image', props.image);
        }
        console.log("Before fetch");
        const response = await fetch(`https://statpad-react-backend-mongodb.onrender.com/api/players/${props._id}`,{
            method:"PUT",
            body:formData
        });
        console.log("after fetch");

        if(response.status === 200) {
            setResult("Player successfully updated");
            event.target.reset();
            props.updatePlayer(await response.json());
            props.closeDialog();
        } else {
            setResult("Error editing player. Apologies");
        }
    };

    return (
        <div id="edit-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                <span
                    id="dialog-close"
                    className="w3-button w3-display-topright"
                    onClick={props.closeDialog}
                >
                    &times;
                </span>
                <form id="edit-property-form" onSubmit={onSubmit}>
                    <p>
                    <label htmlFor="name ">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                        required
                    />
                    </p>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleImageChange}
                        accept="image/*"
                        />
                    </p>
                    <p>
                    <label htmlFor="highlights">Highlight Link:</label>
                    <input
                        type="url"
                        id="link"
                        name="imagelink"
                        onChange={handleChange}
                        required
                    />
                    </p>
                    <p>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                    />
                    </p>
                    <section className="columns">
                    <p id="img-prev-section">
                        <img
                            id="img-prev"
                            src={
                                inputs.img != null
                                ? URL.createObjectURL(inputs.img)
                                : `https://statpad-react-backend-mongodb.onrender.com/${props.image}`
                            }
                            alt=""
                        />
                    </p>
                    </section>
                    <p>
                    <button type="submit">Submit</button>
                    </p>
                    <p>{result}</p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default EditPlayer;