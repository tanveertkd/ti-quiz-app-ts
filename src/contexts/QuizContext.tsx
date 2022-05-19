import React, { createContext, useContext, useReducer } from "react";
import { getQuiz } from "../services";
import { childrenType } from "../types/common.types";
import { quizContextType } from "../types/quiz.types";
import { quizReducer } from "../reducers/QuizReducer";

const QuizContext = createContext({} as quizContextType);

const QuizContextProvider = ({children} : childrenType) => {

    const getQuizHandler = (quizID: number) => {
        const quiz = getQuiz(quizID);
        quizDispatch({type: 'INIT_QUIZ', payload: {...quiz, correctAnswer: 0}});
    }

    const handleCorrectAnswer = () => {
        quizDispatch({type: 'HANDLE_CORRECT_ANSWER', payload: 1})
    }

    const initialState = {
        currentQuiz: {
            id: "",
            quizTitle: "",
            questions: [{
                question: "",
                options: [],
                answer: ""
            }]
        },
        correctAnswers: 0,
    };

    const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

    return(
        <QuizContext.Provider value={{quizState, quizDispatch, getQuizHandler, handleCorrectAnswer}}>
            {children}
        </QuizContext.Provider>
    )

}

const useQuiz = () => {
    const context = useContext(QuizContext);
    if(context === undefined) throw new Error("Quiz context must be defined first.");
    return context;
}

export { QuizContextProvider, useQuiz };