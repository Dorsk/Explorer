import React, { useState } from "react";

const AddLocation = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const location = { name, description, lat, lng, image };

    try {
      const response = await fetch("http://localhost:8080/api/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      });

      if (response.ok) {
        alert("location added successfully!");
        // Optionally clear the form
        setName("");
        setDescription("");
        setLat("");
        setLng("");
        setImage(null);
      } else {
        alert("Failed to add location.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding location.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          type="text"
          rows="4"
          cols="50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Latitude:</label>
        <input
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Longitude:</label>
        <input
          type="number"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Add location</button>
    </form>
  );
};

export default AddLocation;
