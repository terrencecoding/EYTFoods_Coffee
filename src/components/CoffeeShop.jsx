import React from "react";
import Item from "./Item";

const CoffeeShop = () => {
  const products = [
    {
      name: "Sweetened Coffee With Cream",
      price: 11,
      image: "./img/coffee3.png",
    },
    {
      name: "3-in-1 Instant Coffee",
      price: 11,
      image: "./img/coffee2.png",
    },
    {
      name: "Small Packages Instant Coffee",
      price: 11,
      image: "./img/coffee1.png",
    },
    // Add more items here if needed
  ];

  return (
    <div className="product-page">
      <h1 className="page-title">Special menu for you</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Item
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoffeeShop;
