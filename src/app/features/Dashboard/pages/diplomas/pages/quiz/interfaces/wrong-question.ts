import { AnswerOption } from "./all-qustions-interfaces";
import { Answer } from "./answers";

export interface WrongQuestion {
    questionId: string;
  question: string;
  answers:  AnswerOption [];
  correct: string;
  userAnswer: string;
}
