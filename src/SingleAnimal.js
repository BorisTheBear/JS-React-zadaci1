import React from "react";

export default function SingleAnimal({ animal }) {
  let birthDate;

  if (animal.dateOfBirth) {
    birthDate = animal.dateOfBirth;
  }
  return (
    <div>
      <li>Name: {animal.name}</li>
      <li>Species: {animal.species}</li>
      <li>
        Date of birth:
        {!animal.dateOfBirth
          ? " Unknown"
          : " " + birthDate}
      </li>
    </div>
  );
}
