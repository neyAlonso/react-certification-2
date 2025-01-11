import React, { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

function QuestionAnswers({ question, index }) {

    const { handleOnSelectAnswer, answers, selectedAnswers } = useContext(QuestionContext)

    return (
        <div>
            <div>
                {question}
            </div>
            <div>
                {
                    (answers[index] || []).map((answer) => (
                        <button
                            key={answer}
                            className='answersBtn'
                            onClick={() => handleOnSelectAnswer(index, answer)}
                            style={
                                answer === selectedAnswers[index] ?
                                    { backgroundColor: "green" } :
                                    {}
                            }
                        >
                            {answer}
                        </button>
                    ))
                }
            </div>
        </div >
    )
}
export default QuestionAnswers