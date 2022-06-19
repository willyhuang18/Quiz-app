import logo from './logo.svg';
import './App.css';
import React, { useState, } from 'react';
import data from './data.json';


function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    // console.log(ans);
      // if (ans === data[index].correctIndex) {
      //   setScore(score+1);
      // };
      // setIndex(index + 1);
      // console.log(index);
      // console.log(data[index].correctIndex);
      if (isCorrect) {
        setScore(score + 1);
      }
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


  return (
    <div className="container h-100 app">
      <div className='row h-100 justify-content-center align-items-center'>
        <div className='box'>
          {showScore ? (
            <div className='fw-bold fs-3'>You scored {score} out of {data.length}</div>
            ) : (
              <>
              <div>
                <div className='fw-bold fs-3'>
                  <span>Question {currentQuestion + 1} </span>/{data.length}
                </div>
                <div className='fw-bold fs-4'>{data[currentQuestion].question}</div>
              </div>
              <div className='d-flex justify-content-between w-100 p-3 flex-column'>
              {data[currentQuestion].answers.map((answerOption,index) => (
                <button 
                className='btn btn-primary rounded-pill m-1 border border-3 border-warning fs-5'
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key= {index}>
                  {answerOption.answerText}
                </button>
						  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
