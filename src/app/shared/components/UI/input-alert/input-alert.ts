import { Component, Input } from '@angular/core';
import { AbstractControl,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-alert',
  imports: [],
  templateUrl: './input-alert.html',
  styleUrl: './input-alert.scss',
})
export class InputAlert {
@Input() control!: AbstractControl | null;
@Input() name: string ='';

}
