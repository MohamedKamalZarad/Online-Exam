import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const userGuard: CanActivateFn = (route, state) => {
       const cookieService=inject(CookieService) 
     const router = inject(Router)
     if(cookieService.check('token'))
  return router.parseUrl('home')
else
  return true

};
