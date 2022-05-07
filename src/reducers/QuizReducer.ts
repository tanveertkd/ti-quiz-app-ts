import { quizState, quizAction } from "../types/quiz.types"

const quizReducer = (state: quizState, action: quizAction) => {
    switch(action.type){
        case "INIT_QUIZ":
            return {
                currentQuiz: {
                    ...state.currentQuiz,
                    ...action.payload
                },
                correctAnswers: state.correctAnswers = 0
            }
        case "HANDLE_CORRECT_ANSWER":
            return{
                ...state,
                correctAnswers: state.correctAnswers + 10
            }
        
        default:
            return {...state}
    }
}

export { quizReducer }