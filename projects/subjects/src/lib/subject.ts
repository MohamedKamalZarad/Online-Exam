import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SubjectAPI } from './base/SubjectAPI';
import { SubjectEndPoints } from './enums/SubjectsEndPoints';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SubjectsService implements SubjectAPI {
  private readonly httpClient = inject(HttpClient)
  addSubject(data:any): Observable<any> {
    return this.httpClient.post(SubjectEndPoints.ADDSUBJECTS,data)
  }
  updateSubject(id:string,data:any): Observable<any> {
    return this.httpClient.put(SubjectEndPoints.UPDATESUBJECT+id,data)
  }
  deleteSubject(id:string): Observable<any> {
    return this.httpClient.delete(SubjectEndPoints.DELETESUBJECTS+id)
  }
  getAllSubjects(): Observable<any> {
    return this.httpClient.get(SubjectEndPoints.GETALLSUBJECTS)
  }
  getSubjectById(id:string): Observable<any> {
    return this.httpClient.get(SubjectEndPoints.GETSINGLESUBJECT+id)
  }
}
