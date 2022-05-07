import { useState } from 'react';
import { Link } from 'react-router-dom';
import rules from '../../assets/rules-terms.svg';
import './RulesModal.css';

const RulesModal = () => {
    const [modalDisplay, setModalDisplay] = useState(true);
    
    return (
        <>
            {modalDisplay && (
                <div className="modal">
                    <div className="modal-dismiss">
                        <i className="fa fa-close" onClick={() => setModalDisplay(false)} />
                    </div>
                    <div className="modal-body">
                        <h3 className="rules-heading">Rules</h3>
                        <img src={rules} alt="modal asset" className="modal-body-asset" />
                        <p className="modal-body-text">
                            1. There are a total of five questions in each quiz.
                        </p>
                        <p className="modal-body-text">
                            2. There is a 5 minute time limit for the entire quiz and a 1 minute limit
                            per question.
                        </p>
                        <p className="modal-body-text">
                            3. You can only attempt a question once. The options will be disabled once
                            you selected one of them.
                        </p>
                        <p className="modal-body-text">
                            4. Each correct answer will award you with one point. There is no negative
                            marking for wrong answers.
                        </p>
                        <div className="modal-body-btn">
                            <button className="modal-btn btn-primary" onClick={() => setModalDisplay(false)}>
                                Start the Quiz
                            </button>
                            <Link to="../categories" className="modal-btn btn-secondary">
                                Back to Categories
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export { RulesModal };
