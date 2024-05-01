import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ searchQuery, handleSearchChange }) {
  const [plants, setPlants] = useState([])

  function handleNewPlant(newPlantData) {
    setPlants(previousPlants => [...previousPlants, newPlantData])
  }

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      <PlantList searchQuery={searchQuery} plants={plants}/>
    </main>
  );
}

export default PlantPage;
