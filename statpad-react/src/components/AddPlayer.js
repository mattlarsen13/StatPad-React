import "../css/Dialog.css";
import React, { useState } from "react";

const AddPlayer = (props) => {
  const [inputs, setInputs] = useState({});
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target); 

    const response = await fetch("https://statpad-react-back.onrender.com/api/players", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Player Successfully Added");
      event.target.reset(); //reset your form fields
      props.closeDialog();
    } else {
      console.log("Error adding player", response);
      setResult(response.message);
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="add-property-form" onSubmit={onSubmit}>
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
                    inputs.img != null ? URL.createObjectURL(inputs.img) : ""
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

export default AddPlayer;