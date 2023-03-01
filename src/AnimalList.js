import React from "react";
import SingleAnimal from "./SingleAnimal";

export default function AnimalList({ animals, removeAnimal, moveToTop }) {
  return animals.map((element, index) => {
    return (
      <div key={index}>
        <h4>Animal no.{index + 1}</h4>
        <ul>
          <SingleAnimal animal={element} />
          <button onClick={() => moveToTop(index)}>Move to top</button>
          <button onClick={() => removeAnimal(element)}>Remove</button>
        </ul>
      </div>
    );
  });
}
