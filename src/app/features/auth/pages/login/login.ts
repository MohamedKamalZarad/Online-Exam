import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthButton } from "../../../../shared/components/UI/auth-button/auth-button";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'auth';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InputAlert } from "../../../../shared/components/UI/input-alert/input-alert";
import { NgClass } from '@angular/common';
import { SomeThingWentWrong } from "../../../../shared/components/UI/some-thing-went-wrong/some-thing-went-wrong";


@Component({
  selector: 'app-login',
  imports: [RouterLink, AuthButton, ReactiveFormsModule, InputAlert, NgClass, SomeThingWentWrong],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  subRef = new Subscription()
  loginForm = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })


  login(): void {
    if (this.loginForm.valid) {
    
    this.subRef.unsubscribe()
      
      
      this.subRef = this.authService.login(this.loginForm.value).subscribe(
        {
          next: (res) => {
  
            console.log(res);

          }
        })
    }




  }

}

