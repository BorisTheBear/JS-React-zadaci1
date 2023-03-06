import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef, useReducer } from "react";
import AnimalList from "./AnimalList.js";
import { AnimalSector } from "./AnimalSector";
import { SectorList } from "./SectorList";

function App() {
  const [animals, setAnimals] = useState([
    { species: "dog", name: "dog name", dateOfBirth: null, sector: "dogs" },
    { species: "cat", name: "cat name", dateOfBirth: "5.6.2021.", sector: "cats" },
    { species: "horse", name: "horse name", dateOfBirth: "16.9.2019.", sector: "horses" },
    { species: "bird", name: "bird name", dateOfBirth: "25.11.2020.", sector: "birds" },
    { species: "elephant", name: "elephant name", dateOfBirth: "27.9.2010.", sector: "elephants" }
  ]);
  const [sectors, setSectors] = useState(["Dogs", "Cats", "Horses", "Birds", "Elephants"]);
  const animalSpeciesRef = useRef();
  const animalNameRef = useRef();
  const animalBDayRef = useRef();
  const animalSectorRef = useRef();

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

  const handleCheckAnimals = (sectorsElement) => {
    let sectorsAllLowerCase = sectorsElement.toLowerCase();
    let newArray = animals.filter(item => item.sector == sectorsAllLowerCase);
    alert(JSON.stringify(newArray));
  }

  return (
    <div>
      {/* <form> */}
        <label htmlFor="species">Species:</label><br />
        <input ref={animalSpeciesRef} type="text" id="species" name="species" placeholder="Ex. dog"/><br />
        <label htmlFor="name">Name:</label><br />
        <input ref={animalNameRef} type="text" id="name" name="name" placeholder="Ex. Pujdo"/><br />
        <label htmlFor="birthdate">Date of birth:</label><br />
        <input ref={animalBDayRef} type="text" id="birthdate" name="birthdate" placeholder="Ex. 1.1.1900."/><br />
        <label htmlFor="sector">Sector:</label><br />
        <input ref={animalSectorRef} type="text" id="sector" name="sector" placeholder="Enter sector here"></input><br />
        <button onClick={() => handleAddAnimal()}>Add animal</button>
      {/* </form> */}
      <h4>List of animals in the zoo:</h4>
      <AnimalSector />
      <AnimalList
        animals={animals}
        removeAnimal={removeAnimal}
        moveToTop={moveToTop}
      />
      <SectorList sectors={sectors} handleCheckAnimals={handleCheckAnimals}></SectorList>
    </div>
  );
}

export default App;
