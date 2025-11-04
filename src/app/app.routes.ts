import { Routes } from '@angular/router';

import { Auth } from './core/layouts/auth/auth';
import { User } from './core/layouts/user/user';
import { Login } from './features/pages/login/login';
import { Register } from './features/pages/register/register';
import { ForgetPassword } from './features/pages/forget-password/forget-password';
import { CreateNewPassword } from './features/pages/create-new-password/create-new-password';
import { VerifyOtp } from './features/pages/verify-otp/verify-otp';


export const routes: Routes = [

   { path:"" ,component:Auth,children:[
   {  path:"login" ,component:Login,title:"login"
   },
   {
      path:"register" ,component:Register,title:"register"
   },
   {
      path:"forget-password" ,component:ForgetPassword,title:"forget-password"
   },
   {
      path:"create-password" ,component:CreateNewPassword,title:"create-password"
   },
   {
      path:"verify-password" ,component:VerifyOtp,title:"verify-password"
   },
    

]
   },{
      path:"" ,component:User
   }
];
