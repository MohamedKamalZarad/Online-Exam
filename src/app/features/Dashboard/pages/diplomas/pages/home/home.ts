import { Component, HostListener, inject, OnInit } from '@angular/core';
import { HeaderHolder } from "../../../../components/header-holder/header-holder";
import { HttpClient } from '@angular/common/http';
import {Subjects, SubjectsService} from 'subjects'
import { getAllSubjects } from './interface/get-all-subjects';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [HeaderHolder],
  templateUrl: './home.html',
  styleUrl: './home.scss',
}) 
export class Home implements OnInit{
private readonly httpClient=inject(HttpClient)
private readonly subjectsService=inject(SubjectsService)
private readonly _router=inject(Router)

subjects!:getAllSubjects[]
getAllSubjects(){
  this.subjectsService.getAllSubjects().subscribe(
    {
      next:(res)=> {
        this.subjects= res.subjects
        console.log(this.subjects)
        
      }
    }
  )
}
navigate(){
  this._router.navigate(['/exams']);
}
@HostListener('window:wheel')
onScroll(){
  this.navigate()
  
}
ngOnInit(): void {
  this.getAllSubjects()
}
}
