import React from "react";
import { useLocation } from 'react-router';
import Questions from "./components/Questions";
import ButtonNewQuiz from "./components/ButtonNewQuiz";
import FinalScore from "./components/FinalScore";

function AnswersPage() {

    const location = useLocation();

    return (
        <div>
            <header>
                <h1>
                    Results
                </h1>
            </header>

            <main>
                <Questions
                    selectedAnswers={location.state.selectedAnswers}
                    questions={location.state.questions}
                    answers={ location.state.answers}
                />
                <FinalScore
                    selectedAnswers={location.state.selectedAnswers}
                    questions={location.state.questions}
                />
                <div className="centerContainer">
                    <ButtonNewQuiz />
                </div>
            </main>
        </div>

    )
}

export default AnswersPage