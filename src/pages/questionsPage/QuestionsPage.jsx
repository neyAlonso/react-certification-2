import React from 'react'
import FormCreate from './components/FormCreate'
import SubmitButton from './components/SubmitButton'
import Questions from './components/Questions'
import QuestionContextProvider from './context/QuestionContext'

function QuestionsPage() {

  return (
    <QuestionContextProvider>
      <div className='selectAnswers'>
        <header>
          <h1>QUIZ MAKER</h1>
          <FormCreate />
        </header>

        <main>
          <div>
            <Questions />
          </div>
          <div className='centerContainer'>
            <SubmitButton />
          </div>
        </main>
      </div>
    </QuestionContextProvider>
  )
}

export default QuestionsPage
