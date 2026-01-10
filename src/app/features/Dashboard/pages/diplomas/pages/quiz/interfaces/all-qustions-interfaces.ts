
export interface Question {
  _id: string;
  question: string;
  answers: AnswerOption[];
  type: string;
  correct: string;
  subject: any;
 exam?: Exam;
  createdAt: string;
}


export interface AnswerOption {
  answer: string;
  key: string;
}


export interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}

export interface UserAnswer {
  questionId: string;
  correct: string;
}

export interface SubmitPayload {
  answers: UserAnswer[];
  time: number;
}
