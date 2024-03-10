const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You Answered {correctAnswers} out of {questions.length} question
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}> 
              Question {index + 1}.{question.question} 
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
