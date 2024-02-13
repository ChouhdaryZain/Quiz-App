import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts';
import styles from './Quiz.module.css'

const Quiz = () => {

  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const handleOptionClick = (option) => {
    setOptionChosen(option);
  }

  const nextQuestion = () => {
    if (optionChosen === Questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // console.log(score);
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("");
  }

  const finishQuiz = () => {
    if (optionChosen === Questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setGameState("endScreen");
    setOptionChosen("");
  }

  return (
    <div className={`${styles["quiz"]}`}>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className={`${styles["options"]}`}>
        <button className={`${styles['button']}`} onClick={() => handleOptionClick("A")}>{Questions[currentQuestion].optionA}</button>
        <button className={`${styles['button']}`} onClick={() => handleOptionClick("B")}>{Questions[currentQuestion].optionB}</button>
        <button className={`${styles['button']}`} onClick={() => handleOptionClick("C")}>{Questions[currentQuestion].optionC}</button>
        <button className={`${styles['button']}`} onClick={() => handleOptionClick("D")}>{Questions[currentQuestion].optionD}</button>

        {currentQuestion === Questions.length - 1 ? <button className={`${styles['button']}`} onClick={finishQuiz}>Finish Quiz</button> : <button className={`${styles['button']}`} onClick={nextQuestion}>Next Question</button>}

      </div>
    </div>
  )
}

export default Quiz