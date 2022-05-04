import rules from '../../assets/rules-terms.svg';
import './RulesModal.css';

const RulesModal = () => {
    
    return (
        <div className="modal">
            <div className="modal-dismiss">
                <i className="fa fa-close" />
            </div>
            <div className="modal-body">
                <img src={rules} alt="modal asset" className="modal-body-asset" />
                <p className="modal-body-text mo">There are a total of five questions in each quiz.</p>
                <p className="modal-body-text">
                    There is a 5 minute time limit for the entire quiz and a 1 minute limit per
                    question.
                </p>
                <p className="modal-body-text">
                    You can only attempt a question once. The options will be disabled once you
                    selected one of them.
                </p>
                <p className="modal-body-text">
                    Each correct answer will award you with one point. There is no negative marking
                    for wrong answers.
                </p>
                <div className="modal-body-btn">
                    <button className="modal-btn btn-primary" type="submit">
                        Go to Quiz
                    </button>
                    <button className="modal-btn btn-secondary" type="submit">
                        Stay Here
                    </button>
                </div>
            </div>
        </div>
    );
};

export { RulesModal };
