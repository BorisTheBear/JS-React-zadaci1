import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AnimalList from './AnimalList.js'

function App() {
  const [animals, setAnimals] = useState([
    {species: "dog", name: "dog name", dateOfBirth: new Date()},
    {species: "cat", name: "cat name", dateOfBirth: new Date()},
    {species: "horse", name: "horse name", dateOfBirth: new Date()},
    {species: "cow", name: "cow name", dateOfBirth: new Date()},
    {species: "elephant", name: "elephant name", dateOfBirth: new Date()},
  ]);
  

  return (
    <div>
      <h4>List of animals in the zoo:</h4>
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
