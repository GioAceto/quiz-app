import React, { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Contexts';
import { Questions } from '../helpers/QuestionBank';

function Quiz() {

  const { setGameState, score, setScore } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  }


  return (
    <div className="quiz">
      <h2>{Questions[currentQuestion].prompt}</h2>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}> {Questions[currentQuestion].optionA} </button>
        <button onClick={() => setOptionChosen("B")}> {Questions[currentQuestion].optionB} </button>
        <button onClick={() => setOptionChosen("C")}> {Questions[currentQuestion].optionC} </button>
        <button onClick={() => setOptionChosen("D")}> {Questions[currentQuestion].optionD} </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button className="last" onClick={finishQuiz}> Finish Quiz</button>
      ) : (
        <button className="last" onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default Quiz
