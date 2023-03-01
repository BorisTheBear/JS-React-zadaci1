import React from "react";

export default function SingleAnimal({ animal }) {
  const birthDay = animal.dateOfBirth.getUTCDate();
  const birthMonth = animal.dateOfBirth.getUTCMonth();
  const birthYear = animal.dateOfBirth.getUTCFullYear();
  return (
    <div>
      <li>Name: {animal.name}</li>
      <li>Species: {animal.species}</li>
      <li>Date of birth: {birthDay + "." + birthMonth + "." + birthYear}</li>
    </div>
  );
}
