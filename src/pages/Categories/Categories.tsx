import { QuizCard } from '../../components';
import { getAllQuizzes } from '../../services/QuizServices';
import './Categories.css';

const Categories = () => {
    const quizzes = getAllQuizzes();
    return (
        <div className="quiz-body-container">
            <h1 className="quiz-body-head">Categories</h1>

            <div className="quiz-section">
                <h4 className="quiz-body-subhead">Check out some of our quizzes below!</h4>

                <div className="quiz-card-container grid-container grid-3">
                    {quizzes.map((quiz) => (
                        <QuizCard quiz={quiz} id={quiz.id} key={quiz.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Categories };
