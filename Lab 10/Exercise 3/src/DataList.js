import React from "react";

function DataList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={styles.item}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  item: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
  }
};

export default DataList;