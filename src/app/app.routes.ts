import { Routes } from '@angular/router';

import { Auth } from './core/layouts/auth/auth';
import { User } from './core/layouts/user/user';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { ForgetPassword } from './features/auth/pages/forget-password/forget-password';
import { CreateNewPassword } from './features/auth/pages/create-new-password/create-new-password';
import { VerifyOtp } from './features/auth/pages/verify-otp/verify-otp';



export const routes: Routes = [

   { path:"" ,component:Auth,children:[
   {  path:"" ,redirectTo:"login",pathMatch:"full"
   },
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
   
   ,{
       path: '**', redirectTo: '' 

   }
];
