import React from "react";
import he from 'he'

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
                {he.decode(question)}
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
                                {he.decode(answer)}
                            </button>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default QuestionAnswers