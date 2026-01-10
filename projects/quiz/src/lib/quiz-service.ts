import { inject, Injectable, OnInit } from '@angular/core';
import { QuizApi } from './base/QuizAPI';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuizEndPoints } from './enums/QuizEndPoints';
@Injectable({
  providedIn: 'root',
})
export class QuizService implements QuizApi{
  _httpClient = inject(HttpClient)
  addQuestion(data: any): Observable<any> {
    return this._httpClient.post(QuizEndPoints.ADDQUESTIONS,data)
  }
 checkQuestion(id:any,data: any): Observable<any> {
    return this._httpClient.post(QuizEndPoints.CHECKQUESTIONS,data)
  }
  getAllQuestions(): Observable<any> {
    return this._httpClient.get(QuizEndPoints.GETALLQUESTIONS)
  }
 getAllQuestionsOnExam(id:string): Observable<any> {
     return this._httpClient.get(QuizEndPoints.GETALLQUESTIONSONEXAM+id)
  }
 getSingleQuestion(id:string): Observable<any> {
     return this._httpClient.get(QuizEndPoints.GETSINGLEQUESTION+id)
  }
  getUserHistory(): Observable<any> {
     return this._httpClient.get(QuizEndPoints.GETUSERHISTORY)
  }
}
