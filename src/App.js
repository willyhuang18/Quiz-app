import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
	const questions = [
		{
		questionText: "What is the scientific name of a butterfly?",
		answerOptions: [
			{ answerText: 'Apis', isCorrect: false },
			{ answerText: 'Coleoptera', isCorrect: false },
			{ answerText: 'Formicidae', isCorrect: true },
			{ answerText: 'Rhopalocera', isCorrect: false },
		  ],
		},
		{
		questionText: "How hot is the surface of the sun?",
		answerOptions: [
			{ answerText: '1,233 K', isCorrect: true },
			{ answerText: '5,778 K', isCorrect: false },
			{ answerText: '12,130 K', isCorrect: false },
			{ answerText: '101,300 K', isCorrect: false },
		  ],
		},
		{
		questionText: "Who are the actors in The Internship?",
		answerOptions: [
			{ answerText: 'Ben Stiller, Jonah Hill', isCorrect: false },
			{ answerText: 'Courteney Cox, Matt LeBlanc', isCorrect: false },
			{ answerText: 'Kaley Cuoco, Jim Parsons', isCorrect: true },
			{ answerText: 'Vince Vaughn, Owen Wilson', isCorrect: false },
		  ],
		},
		{
		questionText: "What is the capital of Spain?",
		answerOptions: [
			{ answerText: 'Berlin', isCorrect: false },
			{ answerText: 'Buenos Aires', isCorrect: true },
			{ answerText: 'Madrid', isCorrect: false },
			{ answerText: 'San Juan', isCorrect: false },
		  ],
		},
		{
		questionText: "What are the school colors of the University of Texas at Austin?",
		answerOptions: [
			{ answerText: 'Black, Red', isCorrect: false },
			{ answerText: 'Blue, Orange', isCorrect: true },
			{ answerText: 'White, Burnt Orange', isCorrect: false },
			{ answerText: 'White, Old gold, Gold', isCorrect: false },
		  ],
		},
		{
		questionText: "What is 70 degrees Fahrenheit in Celsius?",
		answerOptions: [
			{ answerText: '18.8889', isCorrect: false },
			{ answerText: '20', isCorrect: true },
			{ answerText: '21.1111', isCorrect: false },
			{ answerText: '158', isCorrect: false },
		  ],
		},
		{
		questionText: "When was Mahatma Gandhi born?",
		answerOptions: [
			{ answerText: 'October 2, 1869', isCorrect: false },
			{ answerText: 'December 15, 1872', isCorrect: false },
			{ answerText: 'July 18, 1918', isCorrect: false },
			{ answerText: 'January 15, 1929', isCorrect: false },
			{ answerText: 'None of Above', isCorrect:true},
		  ],
		},
		{
		questionText: "How far is the moon from Earth?",
		answerOptions: [
			{ answerText: '7,918 miles (12,742 km)', isCorrect: false },
			{ answerText: '86,881 miles (139,822 km)', isCorrect: true },
			{ answerText: '238,400 miles (384,400 km)', isCorrect: false },
			{ answerText: '35,980,000 miles (57,910,000 km)', isCorrect: false },
		  ],
		},
		{
		questionText: "What is 65 times 52?",
		answerOptions: [
			{ answerText: '117', isCorrect: false },
			{ answerText: '3120', isCorrect: true },
			{ answerText: '3380', isCorrect: false },
			{ answerText: '3520', isCorrect: false },
		  ],
		},
		{
		questionText: "How tall is Mount Everest?",
		answerOptions: [
			{ answerText: '6,683 ft (2,037 m)', isCorrect: false },
			{ answerText: '7,918 ft (2,413 m)', isCorrect: false },
			{ answerText: '19,341 ft (5,895 m)', isCorrect: true },
			{ answerText: '29,029 ft (8,847 m)', isCorrect: false },
		  ],
		},
		{
		questionText: "When did The Avengers come out?",
		answerOptions: [
			{ answerText: 'May 2, 2008', isCorrect: true },
			{ answerText: 'May 4, 2012', isCorrect: false },
			{ answerText: 'May 3, 2013', isCorrect: false },
			{ answerText: 'April 4, 2014', isCorrect: false },
		  ],
		},
		{
		questionText: "What is 48,879 in hexidecimal?",
		answerOptions: [
			{ answerText: '0x18C1', isCorrect: true },
			{ answerText: '0xBEEF', isCorrect: false },
			{ answerText: '0xDEAD', isCorrect: false },
			{ answerText: '0x12D591', isCorrect: false },
		  ],
		}
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		};

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
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
            <div className='fw-bold fs-3'>You scored {score} out of {questions.length}</div>
            ) : (
              <>
              <div>
                <div className='fw-bold fs-3'>
                  <span>Question {currentQuestion + 1} </span>/{questions.length}
                </div>
                <div className='fw-bold fs-4'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='d-flex justify-content-between w-100 p-3 flex-column'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button 
                className='btn btn-primary rounded-pill m-1 border border-3 border-warning fs-5'
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
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
