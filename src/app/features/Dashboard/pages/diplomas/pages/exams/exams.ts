import { Component, inject, OnInit } from '@angular/core';
import { HeaderHolder } from "../../../../components/header-holder/header-holder";
import { HttpClient } from '@angular/common/http';
import {Exam} from 'exam'
import { ExamsInterfaces } from './interfaces/exams-interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exams',
  imports: [HeaderHolder],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams implements OnInit{
_httpClient=inject(HttpClient)
_examService=inject(Exam)
private readonly _router=inject(Router)
exams!: ExamsInterfaces[] 
ngOnInit(): void {
  this.getAllExams()
}
getAllExams()
{
  return this._examService.getAllExams().subscribe(
    {
      next:(res)=>{
       this.exams =res.exams
       
        
      },
    
      
    }
  )
}
navigate(){
  this._router.navigate(['/home'])
}
navigateToQuiz(id:string){
  this._router.navigate([ '/quiz', id]);
}
}
