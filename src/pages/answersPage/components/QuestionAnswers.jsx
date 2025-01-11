import React, { useState } from "react";

function QuestionAnswers({ question, answers, index, selectedAnswers, correctAnswer}) {

       const styleButton = (answer) => {
        if (answer === selectedAnswers[index]) {
            if (answer === correctAnswer) {
                return { backgroundColor: "green" }
            } else {
                return { backgroundColor: "red" }
            }
        } else {
            if (answer === correctAnswer) {
                return { backgroundColor: "green" }
            }
        }
    }

    return (
        <div>
            <div>
                {question}
            </div>
            <div>
                {
                    answers.map((answer) => {
                        return (
                            <button
                                key={answer}
                                className='answersBtn'
                                style={
                                    styleButton(answer)
                                }
                            >
                                {answer}
                            </button>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default QuestionAnswers