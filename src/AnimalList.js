import React from "react";
import SingleAnimal from "./SingleAnimal";

export default function AnimalList({ animals }) {
  // let animalNumber = 0;

  return animals.map((element, index) => {
    // animalNumber++;
    return (
      <div key={index}>
        <h4>Animal no.{index}</h4>
        <ul>
          <SingleAnimal animal={element} />
        </ul>
      </div>
    );
  });
}
