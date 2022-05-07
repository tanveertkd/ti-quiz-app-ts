import React, { createContext, useContext, useReducer } from "react";
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
    getQuizHandler: React.Dispatch<number>
    handleCorrectAnswer: React.Dispatch<void>
}

const QuizContext = createContext({} as quizContextType);

const QuizContextProvider = ({children} : childrenType) => {
    
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

    const getQuizHandler = (quizID: number) => {
        console.log('called')
        const quiz = getQuiz(quizID);
        quizDispatch({type: 'INIT_QUIZ', payload: {...quiz, correctAnswer: 0}});
        console.log(quizState)
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