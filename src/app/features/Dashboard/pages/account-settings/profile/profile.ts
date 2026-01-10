
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {  AuthService } from 'auth';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { AuthButton } from '../../../../../shared/components/UI/auth-button/auth-button';
import { InputAlert } from '../../../../../shared/components/UI/input-alert/input-alert';
import { SomeThingWentWrong } from '../../../../../shared/components/UI/some-thing-went-wrong/some-thing-went-wrong';
import { UserLoggedInfo } from './interfaces/user-logged-info';
@Component({
  selector: 'app-profile',
  imports: [RouterLink, AuthButton, ReactiveFormsModule, InputAlert, NgClass, SomeThingWentWrong],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit{
 private readonly authService = inject(AuthService)
  private readonly fb = inject(FormBuilder)
  private readonly router = inject(Router)
isClicked:boolean = true
  regRef=new Subscription()
  userInfo:UserLoggedInfo = {} as UserLoggedInfo
  registerForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]],
   

    }
  )
 
  editProfile(){
    this.regRef.unsubscribe()
    if(this.registerForm.valid)
{   this.regRef= this.authService.editProfile(this.registerForm.value).subscribe(
    {
      next:(res)=> console.log(res) 
      
   })
  }}
  getLoggedUserInfo(){
    this.authService.getLoggedUserInfo()
    .subscribe({
      next:(res)=>
      { 
         console.log(res)
        this.userInfo = res.user
        console.log(this.userInfo)
        
      }
      
    })
  
  }

  ngOnInit(): void {
  this.getLoggedUserInfo()
}
openModal(event?: Event) {
  event?.stopPropagation();
  this.isClicked = false; 
}

closeModal(event?: Event) {
  event?.stopPropagation();
  this.isClicked = true; 
}
deleteAccount()
{
  this.authService.deleteMyaccount().subscribe({
    next:(res)=>  console.log(res)
    
  })
}
}
