// src/AddFood.js
import React, { useState } from "react";

const AddFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const food = { name, description, lat, lon };

    try {
      const response = await fetch("http://localhost:8080/api/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      });

      if (response.ok) {
        alert("Food added successfully!");
        // Optionally clear the form
        setName("");
        setDescription("");
        setLat("");
        setLon("");
      } else {
        alert("Failed to add food.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding food.");
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
        <input
          type="text"
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
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFood;
