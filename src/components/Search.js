import React from "react";

function Search({ searchQuery, handleSearchChange }) {
        

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery} 
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;


 // value={""} - empty string = doesn't allow value to change

// function Search({ onSearch }) {
//   console.log(onSearch)
//   const [searchPlant, setSearchPlant] = useState("")

//   function handleSearchChange(event) {
//     event.preventDefault()
//     setSearchPlant(event.target.value)
//     onSearch(searchPlant)

//     fetch('http://localhost:6001/plants')
//       .then(resp => resp.json())
//       .then(data => {
//         const filteredPlants = data.filter(plant => {
//           return plant.name.toLowerCase().includes(searchPlant.toLowerCase)
//         })
        
//         const requestObject = data.map (plant => ({
//           "name": plant.name,
//           "image": plant.image,
//           "price": plant.price
//         }))

//         onSearch(requestObject)
//       })
//       .catch(error => {
//           console.log('Error fetching plant')
//       })
//   }

//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Plants:</label>
//       <input
//         type="text"
//         id="search"
//         placeholder="Type a name to search..."
//         value={searchPlant}
//         onChange={handleSearchChange}
//       />
//     </div>
//   );
// }

// export default Search;
