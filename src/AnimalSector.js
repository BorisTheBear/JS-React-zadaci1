import React from "react";

export const AnimalSector = () => {
    return (
        <select name="zooAnimals" id="zooAnimals">
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="horses">Horses</option>
            <option value="birds">Birds</option>
            <option value="elephants">Elephants</option>
        </select>
        //trebalo bi odraditi da ovo polje i filtrira zivotinje iz izabranog sektora,zar ne?
    )
}