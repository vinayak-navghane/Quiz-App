const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswersLen = userAnswers.filter((answer) => answer).length;
  

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You Answered {correctAnswersLen} out of {questions.length} question
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
            const correctAnswer = question.answerOptions.find(option => option.isCorrect);
          return (
            <li key={index} data-correct={userAnswers[index]}> 
              Question {index + 1}.{question.question} 
              <span className="correct-answer"> Correct Answer: {correctAnswer.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
