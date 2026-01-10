import { inject, Injectable } from '@angular/core';
import { ExamAPI } from './base/ExamAPI';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ExamEndPoint } from './enums/ExamEndPoint';
@Injectable({
  providedIn: 'root',
})
export class Exam implements ExamAPI {
  private readonly httpClient = inject(HttpClient)
  addExam(data: any): Observable<any> {
    return this.httpClient.post(ExamEndPoint.ADDEXAM, data,
)
  }
  getAllExams():Observable<any>
  {
    return this.httpClient.get(ExamEndPoint.GETALLEXAMS)
  }
 getAllExamsOnSubject (id:string) :Observable<any>
  {
    return this.httpClient.get(ExamEndPoint.GETALLEXAMSONSUBJECT+id)
    
    }
  
  getExamById (id:string) :Observable<any> 
  {
     return this.httpClient.get(ExamEndPoint.GETEXAMBYID+id
     )
  }
  }
  
