import React from "react";

function FinalScore({ selectedAnswers, questions }) {

    const counterScore = () => {
        let counter = 0
        for (let i = 0; i < selectedAnswers.length; i++) {
            if (selectedAnswers[i] === questions[i].correct_answer) {
                counter++
            }
        }
        return counter
    }

    const styleScore = (counter) => {
        if (counter == 0 || counter == 1) {
            return { backgroundColor: "red" }
        }
        if (counter == 2 || counter == 3) {
            return { backgroundColor: "yellow" }
        }
        else {
            return { backgroundColor: "green" }
        }
    }

    return (
        <div>
            <span className='finalScore' style={styleScore(counterScore())}>
                You scored {counterScore()} out of {questions.length}
            </span>

        </div>
    )
}

export default FinalScore