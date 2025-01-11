import React from "react";
import { useNavigate } from "react-router";

function ButtonNewQuiz() {

    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/");
    }

    return (
        <button className='newQuizBtn' onClick={handleOnClick}>
            Create a new Quiz
        </button>
    )
}

export default ButtonNewQuiz