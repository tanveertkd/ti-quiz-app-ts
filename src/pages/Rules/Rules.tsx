import { Link } from 'react-router-dom'
import "./Rules.css";

const Rules = () => {
    return(
        <div className="rule-body">
            <h2>Rules</h2>

            <ol className="rule-list-ol">
                <li className="rule">
                    There are a total of five questions in each quiz.
                </li>
                <li className="rule">
                    There is a 5 minute time limit for the entire quiz and a 1 minute limit per question.
                </li>
                <li className="rule">
                    You can only attempt a question once. The options will be disabled once you selected one of them.
                </li>
                <li className="rule">
                    Each correct answer will award you with one point. There is no negative marking for wrong answers.
                </li>
            </ol>

            <p>Take a <Link to="../categories" className="quiz-link">quiz!</Link> Have fun!</p>
        </div>
    )
}
export { Rules }