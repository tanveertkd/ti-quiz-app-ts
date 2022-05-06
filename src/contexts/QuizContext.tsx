import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getQuiz } from "../services";
import {childrenType} from "../types/common.types";

type quizState = {
    currentQuiz: quiz,
    correctAnswers: number, 
}

type quiz = {
    id: number,
    quizTitle: string,
    questions: [{
        question: string,
        options: [],
        answer: string
    }]
}

type quizAction = {
    type: 'INIT_QUIZ' | 'NEXT_QUESTION' | 'PREV_QUESTION' | 'SUBMIT' | 'HANDLE_CORRECT_ANSWER'
    payload: any
}

type quizContextType = {
    quizState: quizState 
    quizDispatch: React.Dispatch<quizAction>
    handleCorrectAnswer: React.Dispatch<void>
}

const QuizContext = createContext({} as quizContextType);

const QuizContextProvider = ({children} : childrenType) => {

    const handleCorrectAnswer = () => {
        quizDispatch({type: 'HANDLE_CORRECT_ANSWER', payload: 1})
    }
    
    const quizReducer = (state: quizState, action: quizAction) => {
        switch(action.type){
            case "INIT_QUIZ":
                return {
                    // ...state,
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

    const initialState = {
        currentQuiz: {},
        correctAnswers: 0,
    };

    const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

    useEffect(() => {
        const quiz = getQuiz(1);
        quizDispatch({type: 'INIT_QUIZ', payload: {...quiz, correctAnswer: 0}});
    },[])

    return(
        <QuizContext.Provider value={{quizState, quizDispatch, handleCorrectAnswer}}>
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