import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ searchQuery }) {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((data) => {
      setPlants(data)
      console.log(data)
    })
  }, [])

  useEffect(() => {
    const filtered = plants.filter((plant) => 
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      setFilteredPlants(filtered)
  },  [plants, searchQuery])

  const plantCards = filteredPlants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ))

  return (
    <ul className="cards">
      { plantCards }
    </ul>
  );
}

export default PlantList;