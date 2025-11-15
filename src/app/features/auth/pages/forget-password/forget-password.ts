import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthButton } from "../../../../shared/components/UI/auth-button/auth-button";
import { VerifyOtp } from "../verify-otp/verify-otp";
import { CreateNewPassword } from "../create-new-password/create-new-password";
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'auth';
import { Subscription } from 'rxjs';
import { InputAlert } from "../../../../shared/components/UI/input-alert/input-alert";
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-forget-password',
  imports: [RouterLink, AuthButton, VerifyOtp, CreateNewPassword, ReactiveFormsModule, InputAlert, NgClass],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {
  steps:number=0 
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  forgetPasswordRef = new Subscription()
  forgetPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })
  onStepChange(step: number) {
  this.steps = step;
}
  forgetPassword(){
    this.forgetPasswordRef.unsubscribe() 
    this.authService.forgotPassword(this.forgetPasswordForm.value).subscribe(
     { 
      next:(res)=>{
        console.log(res)
        
        this.steps=1
      }}
    )
  }
}
