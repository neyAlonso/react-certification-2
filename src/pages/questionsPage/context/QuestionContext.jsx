import { createContext, useState, useEffect } from "react";

export const QuestionContext = createContext();

function QuestionContextProvider({ children }) {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [selectedAnswers, setSelectedAnswers] = useState([])

    const handleOnSelectAnswer = (position, selectedAnswer) => {
        const copy = [...selectedAnswers]

        if (copy[position] === selectedAnswer) {
            delete copy[position]
        } else {
            copy[position] = selectedAnswer
        }

        setSelectedAnswers(copy)
    }

    const shuffleAnswers = (answers) => {
        return answers.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        const answers = questions.map((data) => {
            return shuffleAnswers([data.correct_answer, ...data.incorrect_answers]);
        })

        setAnswers(answers)
    }, [questions])

    return (
        <QuestionContext.Provider value={{
            questions,
            setQuestions,
            answers,
            selectedAnswers,
            handleOnSelectAnswer
        }}>
            {children}
        </QuestionContext.Provider>
    );
}

export default QuestionContextProvider