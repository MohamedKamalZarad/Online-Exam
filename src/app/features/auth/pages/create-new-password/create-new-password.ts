import { Component, inject, Input } from '@angular/core';
import { AuthButton } from "../../../../shared/components/UI/auth-button/auth-button";
import { AbstractControl, FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'auth';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { SomeThingWentWrong } from "../../../../shared/components/UI/some-thing-went-wrong/some-thing-went-wrong";
import { InputAlert } from "../../../../shared/components/UI/input-alert/input-alert";



@Component({
  selector: 'app-create-new-password',
  imports: [AuthButton, ReactiveFormsModule, NgClass, SomeThingWentWrong, InputAlert],
  templateUrl: './create-new-password.html',
  styleUrl: './create-new-password.scss',
})
export class CreateNewPassword {
  @Input () email:string=''
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router= inject(Router);

  createNewPasswordRef = new Subscription()
  createNewPasswordForm = this.fb.group({
  newPassword:['',[Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$')]],
  rePassword:['',[Validators.required]]
  },{validators:this.confirmPassword.bind(this)})
  confirmPassword(createNewPasswordForm:AbstractControl){
  return ( createNewPasswordForm.get("newPassword")?.value 
   ===  createNewPasswordForm.get("rePassword")?.value )? 
    null : {mismatch:true}
  }
newpassword =this.createNewPasswordForm.get("newPassword")?.value
  createNewPassword(){
    if(this.createNewPasswordForm.valid)
    {
      this.authService.resetPassword({"email":this.email,'newPassword':this.newpassword}).subscribe({
        next:()=>{
          this.router.navigate(['/login'])
        }
      }) 

    }
  }
}
