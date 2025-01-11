import React, { useContext, useState } from "react";
import SelectCategory from "./SelectCategory";
import SelectDifficulty from "./SelectDifficulty";
import { QuestionContext } from "../context/QuestionContext";

function FormCreate() {

    const { setQuestions } = useContext(QuestionContext)

    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState('')

    const questionAPI = `https://opentdb.com/api.php?amount=5&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`

    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch(questionAPI)
            .then(response => response.json())
            .then(data => setQuestions(data.results))
    }

    return (
        <form onSubmit={handleOnSubmit} >
            <SelectCategory setSelectedCategory={setSelectedCategory} />
            <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
            <button id='createBtn' type='submit'>
                Create
            </button>
        </form>
    )
}

export default FormCreate