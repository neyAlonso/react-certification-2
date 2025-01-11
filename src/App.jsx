import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import QuestionsPage from './pages/questionsPage/QuestionsPage'
import AnswersPage from "./pages/answersPage/AnswersPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QuestionsPage />} />
                <Route path="/answers" element={<AnswersPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App