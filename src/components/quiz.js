import React, { useState } from 'react'
import { reactQuestions } from '../Data/quizData'
import Quizresult from './quizResult';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const chageQuestion = () => {
        updatedScore()
        if (currentQuestion < reactQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }

    const updatedScore = () => {
        if (clickedOption == reactQuestions[currentQuestion].answer) {
            setScore(score + 1)
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0)
    }

    return (
        <div>
            <p className="heading_txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <Quizresult score={score} totalScore={reactQuestions.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id='question-number'>{currentQuestion + 1}.</span>
                            <span id='question-txt'>{reactQuestions[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {reactQuestions[currentQuestion].options.map((option, index) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption == index + 1 ? "checked" : null
                                            }`}
                                        // className='option_btn'
                                        key={index}
                                        onClick={() => setClickedOption(index + 1)}>
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id='next-button' onClick={chageQuestion} />
                    </>)}
            </div>
        </div>
    )
}