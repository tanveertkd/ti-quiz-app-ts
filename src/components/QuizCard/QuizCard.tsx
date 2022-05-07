import { useNavigate } from 'react-router-dom';

import './QuizCard.css';
import tempAsset from '../../assets/temp-card-img.svg';

type quizId = {
    id: number;
    quiz: {
        id: number;
        quizTitle: string;
        quizBrief: string;
    };
};

const QuizCard = ({ id, quiz }: quizId) => {
    const navigate = useNavigate();
    const theme = localStorage.getItem('currentTheme');
    return (
        <div className={`quiz-card ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <img src={tempAsset} alt="quiz asset" className="quiz-card-image" />
            <div className="quiz-card-text">
                <p className="quiz-title" onClick={() => console.log(id)}>
                    {quiz.quizTitle}
                </p>
                <p className="quiz-brief">{quiz.quizBrief}</p>
            </div>
            <div className="quiz-cta-container">
                <div
                    onClick={() => navigate(`/quiz/${id}`)}
                    className="quiz-cta btn btn-default-outlined"
                >
                    Take the quiz!
                </div>
            </div>
        </div>
    );
};
export { QuizCard };
