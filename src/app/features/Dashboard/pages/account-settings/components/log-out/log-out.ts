import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.html',
  styleUrl: './log-out.scss',
})
export class LogOut {
private readonly cookieService = inject(CookieService);
logOuT(){
  this.cookieService.delete("token")
}
}
