import { Link } from 'react-router-dom';
import { useQuiz } from '../../contexts';
import { matchAnswer } from '../../services';
import './Results.css';

const Results = () => {
    const { quizState } = useQuiz();
    const { quizTitle, questions } = quizState.currentQuiz;
    const correctAnswers = quizState.correctAnswers;
    return (
        <div className="quiz-results-body">
            <h2>{quizTitle}</h2>

            <div className="quiz-data">
                <div className="quiz-timer">
                    <i className="fa-solid fa-clock">
                        <span className="timer-value">5:00</span>
                    </i>
                    <p>Time Remaining</p>
                </div>

                <div className="results">
                    <h3>Results</h3>
                    <p>
                        You've scored{' '}
                        <span className={`${(correctAnswers < 30) ? 'red-span' : 'green-span'}`}>
                            {correctAnswers}
                        </span>
                        /50.
                    </p>
                </div>

                <div className="quiz-form">
                    <h3>The correct answers are given below:</h3>
                    <div className="question-container">
                        {questions.map((question, idx) => {
                            return (
                                <>
                                    <p className="question" key={idx}>
                                        {idx + 1}. {question.question}
                                    </p>
                                    <div className="question-options grid-50-50">
                                        {question.options.map((option) => {
                                            return (
                                                <div className="grid-item">
                                                    <button
                                                        key={option}
                                                        className={`${
                                                            matchAnswer(option, question.answer)
                                                                ? 'option-btn option-correct'
                                                                : 'option-btn'
                                                        }`}
                                                    >
                                                        {option}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        })}

                        <Link to="../categories" className="previous-question change-btn">
                            <i className="arrow prev-arrow"></i> Go Back to Categories
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Results };
