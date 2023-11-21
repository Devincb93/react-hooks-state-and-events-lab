import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange= {(e) => 
        setCategory(e.target.value)}>

          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {items.map((item) => {
          if (selectedCategory === "All" || item.category === selectedCategory) {
            return (
              <Item key={item.id} name={item.name} category={item.category} />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
