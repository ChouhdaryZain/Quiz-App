import './App.css'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
import { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("menu");

  return (
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className='App'>
        <h1>Quiz App</h1>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </div>
    </QuizContext.Provider>
  )
}

export default App
