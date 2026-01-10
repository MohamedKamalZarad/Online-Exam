import { Observable } from "rxjs";

export abstract class ExamAPI{
    abstract addExam (data:any) :Observable<any> 
    abstract getAllExams () :Observable<any> 
    abstract getAllExamsOnSubject (id:string) :Observable<any> 
    abstract getExamById (id:string) :Observable<any> 
   
}