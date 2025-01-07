import React from "react";
// import "./Item.css";

const Item = ({ name, price, image }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>
      <div className="item-buttons">
        <button className="item-button hot">Hot</button>
        <button className="item-button cold">Cold</button>
      </div>
      <button className="item-cart-button">🛒</button>
    </div>
  );
};

export default Item;
