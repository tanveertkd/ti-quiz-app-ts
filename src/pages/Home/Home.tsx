import { Link } from 'react-router-dom';
import './Home.css';
import tempAsset from '../../assets/home-asset.svg';

const Home = () => {
    return (
        // <!-- Quiz home body -->
        <div className="quiz-body-container quiz-home">
            <div className="quiz-home-flex">
                <div className="quiz-body home-asset">
                    <img src={tempAsset} alt="home asset" />
                </div>

                <div className="quiz-body home-body">
                    <h2 className="quiz-body-head">Welcome To Quizznos!</h2>

                    <h3 className="quiz-body-subhead">
                        Choose from a wide range of quizzes to test youself with!
                    </h3>

                    <Link to="categories" className="btn-home-cta btn btn-success-solid">
                        Quizzes! &#8594;
                    </Link>

                    {/* <Link to="profile" className="btn-home-cta btn btn-primary-outlined">
                        Go To Profile! &#8594;
                    </Link> */}
                </div>
            </div>
        </div>
        // <!-- Quiz home body ends  -->
    );
};

export { Home };
