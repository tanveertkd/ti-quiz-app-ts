import { QuizCard } from '../../components';
import { getAllQuizzes } from '../../services/QuizServices';
import './Categories.css';

const Categories = () => {    
    const quizzes = getAllQuizzes();

    return (
        // <!-- Quiz category body -->
        <div className="quiz-body-container">
            <h1 className="quiz-body-head">Categories</h1>

            <div className="quiz-section">
                <h4 className="quiz-body-subhead">Check out some of our quizzes below!</h4>

                <div className="quiz-card-container grid-container grid-3">
                    {/* {[1,2,3,4,5,6,7,8,9,10].map(card => <QuizCard key={card}/>)} */}
                    {quizzes.map(quiz => <QuizCard id={quiz.id} key={quiz.id}/>)}
                </div>
            </div>

        </div>

        // <!-- Quiz category body ends  -->
    )
}

export { Categories }