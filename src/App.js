import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AnimalList from "./AnimalList.js";

function App() {
  const [animals, setAnimals] = useState([
    { species: "dog", name: "dog name", dateOfBirth: null },
    { species: "cat", name: "cat name", dateOfBirth: new Date() },
    { species: "horse", name: "horse name", dateOfBirth: new Date() },
    { species: "cow", name: "cow name", dateOfBirth: new Date() },
    { species: "elephant", name: "elephant name", dateOfBirth: new Date() },
  ]);
  const removeAnimal = (animal) => {
    setAnimals([
      ...animals.slice(0, animals.indexOf(animal)),
      ...animals.slice(animals.indexOf(animal) + 1, animals.length),
    ]);
  };
  const moveToTop = (index) => {
    let newAnimals = animals.filter((item, indexOfEl) => indexOfEl !== index);
    setAnimals([animals[index], ...newAnimals]);
  };

  return (
    <div>
      <h4>List of animals in the zoo:</h4>
      <AnimalList
        animals={animals}
        removeAnimal={removeAnimal}
        moveToTop={moveToTop}
      />
    </div>
  );
}

export default App;
