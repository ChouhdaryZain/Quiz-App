import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import styles from './EndScreen.module.css'

const EndScreen = () => {
  const { setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);

  const restartQuiz = () => {
    setGameState("menu");
    setScore(0);
  }
  return (
    <div className={`${styles['end']}`}>
      <h1>Your Score is {score}</h1>
      <button className={`${styles['restart-button']} ${styles['button']}`} onClick={restartQuiz}> Restart Quiz</button>
    </div >
  )
}

export default EndScreen