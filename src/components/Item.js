import React, {useState}from "react";

function Item({ name, category }) {
  const [addItem, setAddedItem] = useState(false)

  function toggleItem() {
    setAddedItem(!addItem)
  }
  const cartClass = addItem ? "in-cart" : ""
  const buttonText = addItem ? "Add to Cart" : "Remove from Cart"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleItem}>{buttonText}</button>
    </li>
  );
}

export default Item;
