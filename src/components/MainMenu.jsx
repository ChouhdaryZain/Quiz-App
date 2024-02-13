import React, { useContext } from 'react'
import styles from './MainMenu.module.css'
import { QuizContext } from '../Helpers/Contexts';

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <>
      <div className={`${styles["menu"]}`}>
        <button className={`${styles["button"]}`} onClick={() => { setGameState("quiz"); }}>Start Quiz</button>
      </div>
    </>
  )
}

export default MainMenu