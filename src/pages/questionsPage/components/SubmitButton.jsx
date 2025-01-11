import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { QuestionContext } from "../context/QuestionContext";

function SubmitButton() {

    const { questions, selectedAnswers, answers } = useContext(QuestionContext)

    const [visibleSubmit, setVisibleSubmit] = useState(false)

    useEffect(() => {
        let counter = 0
        for (let i = 0; i <= selectedAnswers.length; i++) {
            if (selectedAnswers[i]) {
                counter++
            }
        }

        setVisibleSubmit(counter == 5)
    }, [selectedAnswers])

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/answers", { state: { selectedAnswers, questions, answers } });
    }

    return (
        <button className={visibleSubmit ? 'submitBtnVisible' : 'submitBtnNone'} onClick={handleOnClick} >
            Submit
        </button>
    )
}

export default SubmitButton