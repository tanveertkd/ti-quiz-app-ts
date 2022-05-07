export type quizState = {
    currentQuiz: quiz;
    correctAnswers: number;
};

export type quiz = {
    id: number;
    quizTitle: string;
    questions: [
        {
            question: string;
            options: [];
            answer: string;
        },
    ];
};

export type quizAction = {
    type: quizActionTypes
    payload: any;
};

type quizActionTypes = 'INIT_QUIZ' | 'NEXT_QUESTION' | 'PREV_QUESTION' | 'SUBMIT' | 'HANDLE_CORRECT_ANSWER';

export type quizContextType = {
    quizState: quizState;
    quizDispatch: React.Dispatch<quizAction>;
    getQuizHandler: React.Dispatch<number>;
    handleCorrectAnswer: React.Dispatch<void>;
};
