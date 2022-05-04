import './Quiz.css';

const Quiz = () => {
    const questionsObj = {
        id: 0,
        quiztitle: "Quiz Title 1",
        questions: [
            {
                question: 'This is the first question.',
                options: [
                    'This is option 1',
                    'This is option 2',
                    'This is option 3',
                    'This is option 4',
                ],
                answer: 'This is option 1',
            },
            // {
            //     question: "Question 2",
            //     options: [
            //         'This is option 1',
            //         'This is option 2',
            //         'This is option 3',
            //         'This is option 4',
            //     ],
            //     answer: "option2"
            // },
        ],
    };

    return (
        <div className="quiz-body">
            <h2>Quiz Title</h2>

            {/* <div className="mdoal">
                <RulesModal />
            </div> */}

            <div className="quiz-data">
                <div className="quiz-timer">
                    <i className="fa-solid fa-clock">
                        <span className="timer-value">5:00</span>
                    </i>
                    <p>Time Remaining</p>
                </div>

                <form className="quiz-form">
                    <div className="question-container">
                        <p className="question">
                            1. {questionsObj.questions.map((item) => item.question)}
                        </p>
                        <div className="question-options grid-50-50">
                            {questionsObj.questions.map((item) => {
                                return item.options.map(option => {
                                    return (
                                        <div className="grid-item">
                                            <button key={option} className="option-btn">{option}</button>
                                        </div>
                                    );
                                })
                            })}
                        </div>
                    </div>
                    <div className="prev-next-container">
                        <button className="previous-question change-btn">
                        <i className='arrow prev-arrow'></i> Previous
                        </button>
                        <button className="next-question change-btn">
                            Next <i className='arrow next-arrow'></i>
                        </button>
                    </div>
                    <div className="btn-submit-quiz">
                        <a href="./result.html" className="btn btn-success-solid quiz-submit-btn">
                            Submit
                        </a>
                        <a
                            href="../../categories.html"
                            className="btn btn-error-solid quiz-submit-btn"
                        >
                            Quit
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { Quiz };
