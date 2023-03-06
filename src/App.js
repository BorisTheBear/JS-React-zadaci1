import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef, useReducer } from "react";
import AnimalList from "./AnimalList.js";

function App() {
  const [animals, setAnimals] = useState([
    { species: "dog", name: "dog name", dateOfBirth: null },
    { species: "cat", name: "cat name", dateOfBirth: "5.6.2021." },
    { species: "horse", name: "horse name", dateOfBirth: "16.9.2019." },
    { species: "cow", name: "cow name", dateOfBirth: "25.11.2020." },
    { species: "elephant", name: "elephant name", dateOfBirth: "27.9.2010." },
    { species: "BULJA", name: "Guzica", dateOfBirth: "1.1.1900." }
  ]);
  const animalSpeciesRef = useRef();
  const animalNameRef = useRef();
  const animalBDayRef = useRef();

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

  const handleAddAnimal = () => {
    const species = animalSpeciesRef.current.value;
    const name = animalNameRef.current.value;
    const bDay = animalBDayRef.current.value;
    if (species == "" || name == "" || bDay == "") {
      alert("Please enter fill all fields before adding an animal to the zoo.");
      return;
    }
    setAnimals(previousAnimalList => {
      return [...previousAnimalList, {species: species, name: name, dateOfBirth: bDay}];
    })
    animalSpeciesRef.current.value = null;
    animalNameRef.current.value = null;
    animalBDayRef.current.value = null;
  }

  return (
    <div>
      {/* <form> */}
        <label htmlFor="species">Species:</label><br></br>
        <input ref={animalSpeciesRef} type="text" id="species" name="species" placeholder="Ex. dog"/><br></br>
        <label htmlFor="name">Name:</label><br></br>
        <input ref={animalNameRef} type="text" id="name" name="name" placeholder="Ex. Pujdo"/><br></br>
        <label htmlFor="birthdate">Date of birth:</label><br></br>
        <input ref={animalBDayRef} type="text" id="birthdate" name="birthdate" placeholder="Ex. 1.1.1900."/><br></br>
        <button onClick={() => handleAddAnimal()}>Add animal</button>
      {/* </form> */}
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
