import React, { useState } from "react";

function PlantCard({ plant }) {
// console.log(plant)
  const { id, name, image, price } = plant
  const [ stocked, setStocked ] = useState(true)

  function handleStockedClick() {
    // console.log('clicked')
    setStocked((currentStockedState) => !currentStockedState)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={id} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button onClick={handleStockedClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockedClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
