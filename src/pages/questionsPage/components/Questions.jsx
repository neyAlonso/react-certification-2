import React, { useContext } from "react";
import QuestionAnswers from "../../questionsPage/components/QuestionAnswers";
import { QuestionContext } from "../context/QuestionContext";

function Questions() {

    const { questions } = useContext(QuestionContext)

    return (
        <div>
            {
                questions.map((item, index) => (
                    <QuestionAnswers
                        key={item.question}
                        question={item.question}
                        index={index}
                    />
                ))
            }
        </div>
    )
}

export default Questions