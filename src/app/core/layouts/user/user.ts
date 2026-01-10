import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, RouterLink } from '@angular/router';
import { Navbar } from "../../../features/Dashboard/components/navbar/navbar";
import { HeaderHolder } from "../../../features/Dashboard/components/header-holder/header-holder";
import { AuthService } from 'auth';
import { initFlowbite } from 'flowbite';
import { LogOut } from "../../../features/Dashboard/pages/account-settings/components/log-out/log-out";
@Component({
  selector: 'app-user',
  imports: [RouterOutlet, RouterLinkActive, Navbar, HeaderHolder, RouterLinkWithHref, LogOut],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit{
private readonly authService=inject(AuthService)

userInfo!:any
 getLoggedUserInfo(){
    this.authService.getLoggedUserInfo()
    .subscribe({
      next:(res)=>
      { 
         console.log(res)
        this.userInfo = res.user
        console.log(this.userInfo)
        
      }
      
    })

  }
ngOnInit(): void {
  this.getLoggedUserInfo()
   initFlowbite()
}
 sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
