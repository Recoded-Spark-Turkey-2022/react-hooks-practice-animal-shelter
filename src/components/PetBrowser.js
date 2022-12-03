import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, setPets }) {
  return (
    <div className="ui cards">
      {pets?.map((singlePet) => {
        const { id } = singlePet;
        return <Pet key={id} data={singlePet} petId={id} setPets={setPets} />;
      })}
    </div>
  );
}

export default PetBrowser;
