import React, { useState, useEffect } from "react";
import DataList from "./DataList";

function App() {
  // 2: State for data
  const [data, setData] = useState([]);

  // Loading + Error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3,8: useEffect (runs once)
  useEffect(() => {
    // 4: Fetch API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);       // 2
        setLoading(false);     // 6
      })
      .catch((err) => {
        setError(err.message); // 7
        setLoading(false);
      });
  }, []); // run only once

  return (
    <div style={styles.container}>
      <h2>API Data</h2>

      {/* 6: Loading */}
      {loading && <p>Loading...</p>}

      {/* 7: Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 5,9: Display data */}
      {!loading && !error && <DataList data={data.slice(0, 5)} />}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "20px auto",
    fontFamily: "Arial"
  }
};

export default App;