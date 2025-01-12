import React from "react";
import QuestionAnswers from "./QuestionAnswers";

function Questions({ questions, selectedAnswers, answers }) {

    return (
        <div className="questionsContainer">
            {
                questions.map((item, index) => (
                    <QuestionAnswers
                        key={item.question}
                        question={item.question}
                        answers={answers[index]}
                        index={index}
                        selectedAnswers={selectedAnswers}
                        correctAnswer={item.correct_answer}
                    />
                ))
            }
        </div>
    )
}

export default Questions