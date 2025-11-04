import { Routes } from '@angular/router';
import { Login } from './core/pages/login/login';
import { Register } from './core/pages/register/register';
import { ForgetPassword } from './core/pages/forget-password/forget-password';
import { Auth } from './core/layouts/auth/auth';
import { User } from './core/layouts/user/user';
import { VerifyOtp } from './core/pages/verify-otp/verify-otp';
import { CreateNewPassword } from './core/pages/create-new-password/create-new-password';

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
