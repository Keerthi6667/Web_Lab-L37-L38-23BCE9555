import React, { useState } from "react";

function App() {
  // Initialize counter state with default value 0
  const [count, setCount] = useState(0);

  // Function to increase counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>

      {/* Display counter value */}
      <h2>{count}</h2>

      {/* Buttons for user interaction */}
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;