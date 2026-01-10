import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {QuizService} from 'quiz'
import { Question } from './interfaces/all-qustions-interfaces';
import { HeaderHolder } from "../../../../components/header-holder/header-holder";
import { Answer, Answers } from './interfaces/answers';
import { WrongQuestion } from './interfaces/wrong-question';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration-pipe';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.html',
  imports: [HeaderHolder, BaseChartDirective, RouterLink,CommonModule, DurationPipe]
})
export class Quiz implements OnInit {


  private readonly route = inject(ActivatedRoute);
  private readonly quizService  = inject(QuizService);
  selectedAnswerKey: string | null = null;
  steps:number=1
resaults!:any
wrongQuestions:any[] = [];
totalTime = 0;     
remainingTime = 0;
timeProgress = 0;  
timerInterval: any;

  examId!: string;
  questions:Question[]=[]
  currentIndex:number=0
  isChanged:boolean =false
  numOFCorrectAnswers:number=0
  numOFInCorrectAnswers:number=0
ansewrs: Answers = {
  answers: [],
  time: 10
};


  getQuestions(){
this.quizService.getAllQuestionsOnExam(this.examId).subscribe(
  {
    next:(res)=> {
      this.questions=res.questions
const duration = this.questions[0].exam?.duration || 0;
  this.startTimer(duration * 60); 

  }
    
  } 
)
  }
  next() 
  {
    if(this.currentIndex >= this.questions.length-1) {
      console.log(this.currentIndex);
      
    return }
    this.currentIndex++;
  }
  prev()
  {
    if (this.currentIndex<= 0) return
      this.currentIndex--
    
  }
getAnswers(questionId: string, answer: string) {
  const existing = this.ansewrs.answers.find(a => a.questionId === questionId);

  if (existing) {
    existing.correct = answer;
  } else {
    this.ansewrs.answers.push({ questionId, correct: answer });
  }
}
  changetheAnswer(questionId: string) {
  this.isChanged = this.ansewrs.answers.some(value => value.questionId === questionId);
}

sendAnswers() {
  if (this.currentIndex === this.questions.length - 1) {
    console.log('Sent answers:', this.ansewrs.answers.length, this.ansewrs.answers);
    this.quizService.checkQuestion(this.examId, this.ansewrs).subscribe({
      next: res => {
        this.resaults=res.WrongQuestions
        this.numOFCorrectAnswers=res.correct
        this.numOFInCorrectAnswers=res.wrong
        console.log(res)
        this.updateChart() 
    //  res.WrongQuestions.map((value:any)=>this.getSingleQuestion (value.QID))
   this.wrongQuestions=res.WrongQuestions
        console.log(this.resaults)}
    });
  }
}

  onSelectAnswer(questionId: string, answerKey: string) {
  this.getAnswers(questionId, answerKey);
  this.changetheAnswer(questionId);
}
getUserAnswer(questionId: string): string | null {
  return this.ansewrs.answers.find(a => a.questionId === questionId)?.correct || null;
}

isWrongQuestion(questionId: string): boolean {
  return this.wrongQuestions.some(w => w.QID === questionId);
}

  ngOnInit() {
    this.examId = this.route.snapshot.paramMap.get('id')!;
    this.getQuestions()

  }
  onSubmit(){
    if(this.currentIndex===this.questions.length-1)
{    this.sendAnswers()
  this.steps=2}
  else
  
    this.next()
  }
hasAnswerForCurrent(): boolean {
  const qid = this.questions[this.currentIndex]?._id;

  return this.ansewrs.answers.some(a => a.questionId === qid)
}
getUserAnswerKey(questionId: string): string | null {
  return this.ansewrs.answers.find(a => a.questionId === questionId)?.correct || null;
}

getAnswerText(question: Question, key: string | null): string {
  if (!key) return "not selected";
  const found = question.answers.find(a => a.key === key);
  return found ? found.answer : '';
}

isWrong(questionId: string): boolean {
  return this.wrongQuestions.some(w => w.QID === questionId || w === questionId);
}

getSingleQuestion(id:string){

  this.quizService.getSingleQuestion(id).subscribe(
    {
      next:(res)=>{
     this.wrongQuestions.push(res)
      console.log( this.wrongQuestions)
      
        
      }
    }
  )
}


public doughnutData = {
  labels: ['Correct', 'Incorrect'],
  datasets: [{
    data: [this.numOFCorrectAnswers, this.numOFInCorrectAnswers],
    backgroundColor: ['#22C55E', '#EF4444']
  }]
};

public doughnutOptions = {
  cutout: '70%',
  plugins: {
    legend: { display: false }
  }
};

updateChart() {
  this.doughnutData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      data: [this.numOFCorrectAnswers, this.numOFInCorrectAnswers],
      backgroundColor: ['#00BC7D', '#EF4444']
    }]
  };
}
restart(){
  this.currentIndex=0
  this.steps=1
  
  console.log(this.steps)
  
this.ansewrs= {
  answers: [],
  time: 10
}
}
startTimer(seconds: number) {
  this.totalTime = seconds;
  this.remainingTime = seconds;

  this.timerInterval = setInterval(() => {
    this.remainingTime--;

    this.timeProgress = ((this.totalTime - this.remainingTime) / this.totalTime) * 100;

    if (this.remainingTime <= 0) {
      clearInterval(this.timerInterval);
     

      this.onSubmit();
    }
  }, 1000);
}


}
