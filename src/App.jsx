import './App.css'
import { useState } from 'react'


function App() {
  const [currentQuestion,setcurrentQuestion] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);

  return (
   <div className='App'>
    <h1>Quiz</h1>
   </div>
  )
}

export default App
