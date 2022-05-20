import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { matchAnswer } from '../../services';
import { useQuiz } from '../../contexts';
import { RulesModal } from '../RulesModal/RulesModal';

import './Quiz.css';

const Quiz = () => {
    const params = useParams();
    const id = params.id!;
    const idx = parseInt(id);

    const [questionIndex, setQuestionIndex] = useState(0);
    const { quizState, getQuizHandler, handleCorrectAnswer } = useQuiz();

    const { quizTitle, questions } = quizState?.currentQuiz;

    useEffect(() => {
        getQuizHandler(idx);
    }, []);

    const [optionSelected, setOptionSelected] = useState('');

    return (
        <div className="quiz-body">
            <h2>{quizTitle}</h2>

            <div className="modal-container">
                <RulesModal />
            </div>

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
                                    <div className="grid-item" key={item}>
                                        <button
                                            key={item}
                                            className={`${
                                                optionSelected === item
                                                    ? 'option-selected option-btn'
                                                    : 'option-btn'
                                            }`}
                                            onClick={() => {
                                                if (
                                                    matchAnswer(
                                                        item,
                                                        questions[questionIndex].answer,
                                                    )
                                                ) {
                                                    handleCorrectAnswer();
                                                }
                                                setOptionSelected(item);
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
                            onClick={() => {
                                setQuestionIndex((prev) => prev + 1);
                                setOptionSelected('');
                            }}
                        >
                            Next <i className="arrow next-arrow"></i>
                        </button>
                    </div>
                    <div className="btn-submit-quiz">
                        <Link to="../results" className="btn btn-success-solid quiz-submit-btn">
                            Submit
                        </Link>
                        <Link to="../categories" className="btn btn-error-solid quiz-submit-btn">
                            Quit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Quiz };
