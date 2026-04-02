import React, { useState } from "react";
import ItemList from "./ItemList";

function App() {
  // 2: Array state
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 5: Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),   // 4: Unique key
      text: input
    };

    setItems([...items, newItem]);   // update state
    setInput("");
  };

  // 6: Remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Item List</h2>

      {/* Input section */}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>

      {/* 9: Separate display logic */}
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;