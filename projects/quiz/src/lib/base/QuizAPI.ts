import { Observable } from "rxjs";

export abstract class QuizApi{
abstract addQuestion(data:any):Observable<any>
abstract getAllQuestions():Observable<any>
abstract getAllQuestionsOnExam(id:string):Observable<any>
abstract getUserHistory():Observable<any>
abstract getSingleQuestion(id:string):Observable<any>
abstract checkQuestion(id:any,data: any):Observable<any>
}