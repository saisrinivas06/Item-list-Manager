// import React from "react";
// import ItemListManager from "./ItemListManager";

// const App = () => {
//   return <ItemListManager />;
// };

// export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Item List Manager</h1>
        <p>Organize your items efficiently!!</p>
      </header>
      <div className="input-section">
        <input
          type="text"
          className="input-box"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new item"
        />
        <button className="add-button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
