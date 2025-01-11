import React from "react";

function SelectDifficulty({ setSelectedDifficulty }) {

    const handleOnChange = (event) => {
        setSelectedDifficulty(event.target.value)
    }

    return (
        <select id='difficultySelect' defaultValue='' onChange={handleOnChange}>
            <option value='' disabled>Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    )
}

export default SelectDifficulty