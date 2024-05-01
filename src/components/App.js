import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="app">
      <Header />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter your search text"
      />
      <PlantPage searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
    </div>
  )
}

export default App;