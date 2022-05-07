import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Quiz.css';
import { matchAnswer } from '../../services';
import { useQuiz } from '../../contexts';

const Quiz = () => {
    const params = useParams();
    const id = params.id!;

    const [questionIndex, setQuestionIndex] = useState(0);
    const { quizState, getQuizHandler, handleCorrectAnswer } = useQuiz();

    const { quizTitle, questions } = quizState?.currentQuiz;
    console.log(quizState);
    const idx = parseInt(id)

    useEffect(() =>{ 
        getQuizHandler(idx)
    }, [])

    return (
        <div className="quiz-body">
            <h2>{quizTitle}</h2>

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
                            {questionIndex + 1}. {questions[questionIndex]?.question}
                        </p>
                        <div className="question-options grid-50-50">
                            {questions[questionIndex]?.options?.map((item) => {
                                return (
                                    <div className="grid-item">
                                        <button
                                            key={item}
                                            className="option-btn"
                                            onClick={() => {
                                                if(matchAnswer(item, questions[questionIndex].answer)){
                                                    handleCorrectAnswer();
                                                }
                                            }}
                                        >
                                            {item}
                                        </button>
                                    </div>
                                );
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
                            disabled={questionIndex + 1 === questions?.length}
                            onClick={() => setQuestionIndex((prev) => prev + 1)}
                        >
                            Next <i className="arrow next-arrow"></i>
                        </button>
                    </div>
                    <div className="btn-submit-quiz">
                        <Link to="../results" className="btn btn-success-solid quiz-submit-btn">
                            Submit
                        </Link>
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
