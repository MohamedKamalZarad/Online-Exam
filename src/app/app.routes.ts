import { Routes } from '@angular/router';

import { Auth } from './core/layouts/auth/auth';
import { User } from './core/layouts/user/user';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { ForgetPassword } from './features/auth/pages/forget-password/forget-password';
import { CreateNewPassword } from './features/auth/pages/create-new-password/create-new-password';
import { VerifyOtp } from './features/auth/pages/verify-otp/verify-otp';
import { Diplomas } from './features/Dashboard/pages/diplomas/diplomas';
import { Home } from './features/Dashboard/pages/diplomas/pages/home/home';
import { AccountSettings } from './features/Dashboard/pages/account-settings/account-settings';

import { Exams } from './features/Dashboard/pages/diplomas/pages/exams/exams';
import { Questions } from './features/Dashboard/pages/diplomas/pages/questions/questions';
import { Quiz } from './features/Dashboard/pages/diplomas/pages/quiz/quiz';
import { Profile } from './features/Dashboard/pages/account-settings/profile/profile';
import { ChangePassword } from './features/Dashboard/pages/account-settings/change-password/change-password';
import { userGuard } from './core/guards/user-guard';
import { authGuard } from './core/guards/auth-guard';




// export const routes: Routes = [

//    {
//       path: "", component: Auth,
//       canActivate:[userGuard]
//       , children: [
//          { path: "", redirectTo: "login", pathMatch: "full" },
//          { path: "login", component: Login, title: "login", data: { breadcrumb: 'Login' } },
//          { path: "register", component: Register, title: "register", data: { breadcrumb: 'Register' } },
//          { path: "forget-password", component: ForgetPassword, data: { breadcrumb: 'Forget Password' } },
//       ]
//    },
//    {
//       path: "", component: User, 
//          canActivate:[authGuard]
//       ,children: [
//          {
//             path: "", component: Diplomas, children: [
//                { path: "", redirectTo: "home", pathMatch: "full" },
//                { path: "home", component: Home, data: { breadcrumb: 'Home' } },
//                { path: "quiz/:id", component: Quiz, data: { breadcrumb: 'Quiz' } },
//                { path: "exams", component: Exams, data: { breadcrumb: 'Exams' } },
//                { path: "questions", component: Questions, data: { breadcrumb: 'Questions' } },
//             ]
//          },
//          {
//             path: "", component: AccountSettings, children: [
//                { path: "", redirectTo: "profile", pathMatch: "full" },
//                { path: "profile", component: Profile, data: { breadcrumb: 'Profile' } },
//                { path: "change-password", component: ChangePassword, data: { breadcrumb: 'Change Password' } }
//             ]
//          }
//       ]
//    },
//    { path: '**', redirectTo: '' }
// ];
export const routes: Routes = [

  {
    path: '',
    component: Auth,
    canActivate: [userGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'forget-password', component: ForgetPassword },
    ]
  },

  {
    path: '',
    component: User,
    canActivate: [authGuard],
    children: [

      {
        path: '',
        component: Diplomas,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: Home },
          { path: 'exams', component: Exams },
          { path: 'quiz/:id', component: Quiz },
          { path: 'questions', component: Questions },
        ]
      },

      {
        path: 'account-settings',
        component: AccountSettings,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: Profile },
          { path: 'change-password', component: ChangePassword }
        ]
      }

    ]
  },

  { path: '**', redirectTo: '' }
];

