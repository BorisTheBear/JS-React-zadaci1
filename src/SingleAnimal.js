import React from "react";

export default function SingleAnimal({ animal }) {
  let birthDay, birthMonth, birthYear;

  if (animal.dateOfBirth) {
    birthDay = animal.dateOfBirth.getUTCDate();
    birthMonth = animal.dateOfBirth.getUTCMonth();
    birthYear = animal.dateOfBirth.getUTCFullYear();
  }
  return (
    <div>
      <li>Name: {animal.name}</li>
      <li>Species: {animal.species}</li>
      <li>
        Date of birth:
        {!animal.dateOfBirth
          ? " Unknown"
          : birthDay + "." + birthMonth + "." + birthYear}
      </li>
    </div>
  );
}
