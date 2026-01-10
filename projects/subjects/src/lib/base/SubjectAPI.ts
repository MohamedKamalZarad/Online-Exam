import { Observable } from "rxjs";

export abstract class SubjectAPI{
abstract addSubject(data:any):Observable<any> 
abstract updateSubject(id:string,data:any):Observable<any>
abstract deleteSubject(id:string):Observable<any>
abstract getAllSubjects():Observable<any>
abstract getSubjectById(id:string):Observable<any>
}