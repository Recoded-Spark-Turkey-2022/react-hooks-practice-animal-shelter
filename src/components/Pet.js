import React from "react";

function Pet({ data, setPets, petId }) {
  const { age, gender, isAdopted, name, type, weight, id } = data;

  const handleAdopted = () => {
    if (id === petId) {
      setPets((prevState) =>
        prevState.map((singleState) =>
          singleState.id === id
            ? { ...singleState, isAdopted: true }
            : singleState
        )
      );
    }
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {name}
        </span>
        <div className="meta">
          <span className="date">PET TYPE: {type} </span>
        </div>
        <div className="description">
          <p>Age:{age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={`ui ${isAdopted ? "primary" : "disabled"}  button`}>
          Already adopted
        </button>
        <button
          className={`ui ${isAdopted ? "disabled" : "primary"} button`}
          onClick={handleAdopted}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
