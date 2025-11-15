import { Injectable } from '@angular/core';
import { adaptor } from '../interfaces/adaptor';


@Injectable({
  providedIn: 'root',
})
export class AuthAdaptation implements adaptor{
  adapt(data: any): any {
    return {
      token: data.token,
      message: data.message,
      email: data.user.email
    }

  }
}
