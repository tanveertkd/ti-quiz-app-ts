import './QuizCard.css';
import tempAsset from '../../assets/temp-card-img.svg';

const QuizCard = () => {
    return (
        <div className="quiz-card">
            <img src={tempAsset} alt="quiz asset" className="quiz-card-image" />
            <div className="quiz-card-text">
                <p className="quiz-title">Quiz Title</p>
                <p className="quiz-brief">Brief about the quiz</p>
            </div>
            <div className="quiz-cta-container">
                <a href="../routes/quizzes/quiz-one/index.html" className="quiz-cta btn btn-default-outlined">Take the quiz!</a>
            </div>
        </div>
    )
}
export { QuizCard }