import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthButton } from "../../../../shared/components/UI/auth-button/auth-button";
import {  AuthService } from 'auth';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InputAlert } from "../../../../shared/components/UI/input-alert/input-alert";
import { NgClass } from '@angular/common';
import { SomeThingWentWrong } from "../../../../shared/components/UI/some-thing-went-wrong/some-thing-went-wrong";
@Component({
  selector: 'app-register',
  imports: [RouterLink, AuthButton, ReactiveFormsModule, InputAlert, NgClass, SomeThingWentWrong],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly authService = inject(AuthService)
  private readonly fb = inject(FormBuilder)
  private readonly router = inject(Router)

  regRef=new Subscription()

  registerForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$')]],
      rePassword: ['', [Validators.required,]],

    } ,{validators:this.confirmPassword.bind(this)}
  )
  confirmPassword(registerForm: AbstractControl) {
    return (registerForm.get("password")?.value === registerForm.get("rePassword")?.value)? null:
    {
      mismatch: true
    }
   
  }
  register(){
    this.regRef.unsubscribe()
    if(this.registerForm.valid)
{   this.regRef= this.authService.register(this.registerForm.value).subscribe(
    {
      next:()=>this.router.navigate(["/login"])
    }
   )}
  }
}
