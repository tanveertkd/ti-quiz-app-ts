import { questionsObj } from '../QuizList';

const getQuiz = (quizID: number) => questionsObj.questionsArray.find((quiz) => quiz.id === quizID);

const matchAnswer = (answerSelected: string, actualAnswer: string) => {
    if (answerSelected === actualAnswer) return true;
};

export { getQuiz, matchAnswer };
