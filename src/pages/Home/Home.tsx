import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        // <!-- Quiz home body -->
        <div className="quiz-body-container quiz-home">
            <div className="quiz-body">
                <h2 className="quiz-body-head">Welcome To Quizznos!</h2>

                <h3 className="quiz-body-subhead">
                    Choose from a wide range of quizzes to test youself with!
                </h3>

                <Link to="categories" className="btn-home-cta btn btn-success-solid">
                    Quizzes! &#8594;
                </Link>

                <Link to="profile" className="btn-home-cta btn btn-primary-outlined">
                    Go To Profile! &#8594;
                </Link>
            </div>
        </div>
        // <!-- Quiz home body ends  -->
    );
};

export { Home };
