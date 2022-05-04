import { useState } from 'react';
import { questionsObj } from '../../QuizList';
import './Quiz.css';

const Quiz = () => {
    let quizID = 0;
    const [questionIndex, setQuestionIndex] = useState(0);
    const currentQuiz = questionsObj.questionsArray.find((current) => current.id === quizID);
    console.log(currentQuiz);
    console.log(questionIndex+1 === currentQuiz?.questions.length)

    return (
        <div className="quiz-body">
            <h2>{currentQuiz?.quiztitle}</h2>

            {/* <div className="mdoal">
                <RulesModal />
            </div> */}

            <div className="quiz-data">
                <div className="quiz-timer">
                    <i className="fa-solid fa-clock">
                        <span className="timer-value">5:00</span>
                    </i>
                    <p>Time Remaining</p>
                </div>

                <div className="quiz-form">
                    <div className="question-container">
                        <p className="question">
                            {questionIndex+1}. {currentQuiz?.questions[questionIndex].question}
                        </p>
                        <div className="question-options grid-50-50">
                            {currentQuiz?.questions[questionIndex].options.map((item) => {
                                return (
                                    <div className="grid-item">
                                        <button key={item} className="option-btn">
                                            {item}
                                        </button>
                                    </div>
                                );

                                // return item.options.map((option) => {
                                //     return (
                                //         <div className="grid-item">
                                //             <button key={option} className="option-btn">
                                //                 {option}
                                //             </button>
                                //         </div>
                                //     );
                                // });
                            })}
                        </div>
                    </div>
                    <div className="prev-next-container">
                        <button
                            className="previous-question change-btn"
                            onClick={() => {
                                questionIndex !== 0 && setQuestionIndex((prev) => prev - 1);
                            }}
                        >
                            <i className="arrow prev-arrow"></i> Previous
                        </button>
                        <button
                            className="next-question change-btn"
                            disabled={questionIndex+1 === currentQuiz?.questions.length}
                            onClick={() => setQuestionIndex((prev) => prev + 1)}
                        >
                            Next <i className="arrow next-arrow"></i>
                        </button>
                    </div>
                    <div className="btn-submit-quiz">
                        <a href="./result.html" className="btn btn-success-solid quiz-submit-btn">
                            Submit
                        </a>
                        <a
                            href="../../categories.html"
                            className="btn btn-error-solid quiz-submit-btn"
                        >
                            Quit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Quiz };
