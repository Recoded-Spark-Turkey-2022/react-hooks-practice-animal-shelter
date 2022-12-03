import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const fetchData = async () => {
    try {
      const params =
        filters.type === "all"
          ? "pets"
          : filters.type === "cat"
          ? "pets?type=cat"
          : filters.type === "dog"
          ? "pets?type=dog"
          : filters.type === "micropig"
          ? "pets?type=micropig"
          : "all";

      const URL = `http://localhost:3001/${params}`;

      const response = await fetch(URL);
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters} fetchData={fetchData} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} setPets={setPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
