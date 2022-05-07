import { questionsObj } from '../QuizList';

const getQuiz = (quizID: number) => questionsObj.questionsArray.find((quiz) => quiz.id === quizID);

const getAllQuizzes = () => questionsObj.questionsArray;

const matchAnswer = (answerSelected: string, actualAnswer: string) => {
    if (answerSelected === actualAnswer) return true;
};

export { getQuiz, getAllQuizzes, matchAnswer };
