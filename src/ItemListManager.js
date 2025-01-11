import React, { useState } from "react";

const ItemListManager = () => {
  const [items, setItems] = useState([]); 
  const [input, setInput] = useState(""); 

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]); 
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Item List</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input field value
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={handleAddItem}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Display items in a list
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;