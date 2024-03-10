import "./App.css";
import { useState } from "react";
import questions from "./constants/questions.json";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setcurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setcurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Quiz</h1>

      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      { currentQuestion === questions.length && (
        <Result
        userAnswers={userAnswers}
        questions={questions}
        resetQuiz={resetQuiz}
      />)}
    </div>
  );
}

export default App;
