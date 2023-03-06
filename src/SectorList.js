import React from "react";

export const SectorList = ({sectors, handleCheckAnimals}) => {
    return sectors.map((element, index) => {
        return (
            <div key={index}>
                {element}
                <button onClick={() => handleCheckAnimals(element)}>Check animals</button>
            </div>
        )
    })
}