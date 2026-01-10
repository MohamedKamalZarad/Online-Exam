import { Component, inject } from '@angular/core';
import { SomeThingWentWrong } from '../../../../../shared/components/UI/some-thing-went-wrong/some-thing-went-wrong';
import { NgClass } from '@angular/common';
import { InputAlert } from '../../../../../shared/components/UI/input-alert/input-alert';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthButton } from '../../../../../shared/components/UI/auth-button/auth-button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-change-password',
  imports: [RouterLink, AuthButton, ReactiveFormsModule, InputAlert, NgClass, SomeThingWentWrong],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword {
  private readonly authService = inject(AuthService)
  private readonly fb = inject(FormBuilder)
  private readonly router = inject(Router)
  private readonly cookieService = inject(CookieService);
  regRef = new Subscription()

  resetPasswordForm = this.fb.group(
    {
      currentPassword: ['', [Validators.required,]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$')]],
      rePassword: ['', [Validators.required,]],

    }, { validators: this.confirmPassword.bind(this) }
  )
  confirmPassword(resetPasswordForm: AbstractControl) {
    return (resetPasswordForm.get("password")?.value === resetPasswordForm.get("rePassword")?.value) ? null :
      {
        mismatch: true
      }

  }
  resetPassword() {
    this.regRef.unsubscribe()
    if (this.resetPasswordForm.valid) {
      this.regRef = this.authService.changePassword({
        oldPassword: this.resetPasswordForm.get("currentPassword")?.value,
        password: this.resetPasswordForm.get("password")?.value,
        rePassword: this.resetPasswordForm.get("rePassword")?.value,
      }).subscribe(
        {
          next: (res) => {
            console.log(res)
         this.cookieService.set("token",res.token)
          }

        }
      )
    }
  }
}
