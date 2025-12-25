import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthButton } from "../../../../shared/components/UI/auth-button/auth-button";
import { FormBuilder, Validators, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from 'auth';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-verify-otp',
  imports: [RouterLink, AuthButton, ReactiveFormsModule, NgClass],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOtp {
  @Output() steps: EventEmitter<number> = new EventEmitter<number>();
  @Input() email: string = ''
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  createNewPasswordRef = new Subscription()
  VerifyOtpForm = this.fb.group({
    digit1: ['', [Validators.required, Validators.pattern('[0-9]')]],
    digit2: ['', [Validators.required, Validators.pattern('[0-9]')]],
    digit3: ['', [Validators.required, Validators.pattern('[0-9]')]],
    digit4: ['', [Validators.required, Validators.pattern('[0-9]')]],
    digit5: ['', [Validators.required, Validators.pattern('[0-9]')]],
    digit6: ['', [Validators.required, Validators.pattern('[0-9]')]],
  })
  verifyOtp() {
  let restCode = Object.values(this.VerifyOtpForm.value)?.join('') || ''
  this.createNewPasswordRef.unsubscribe()
   this.createNewPasswordRef= this.authService.verifyResetCode(restCode).subscribe({
      next: () => {
        this.steps.emit(2);
      }
    })
  }

}
