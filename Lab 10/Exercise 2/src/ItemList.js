import React from "react";

function ItemList({ items, removeItem }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>No items available</p>   // 8: Empty list handling
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;