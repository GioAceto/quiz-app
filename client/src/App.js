import './styles/styles.scss';
import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>

      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}

    </div>
  );
}

export default App;
