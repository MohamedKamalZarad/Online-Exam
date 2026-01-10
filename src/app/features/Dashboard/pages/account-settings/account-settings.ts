import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, RouterLink } from '@angular/router';
import { HeaderHolder } from "../../components/header-holder/header-holder";
import { LogOut } from "./components/log-out/log-out";

@Component({
  selector: 'app-account-settings',
  imports: [RouterOutlet, RouterLinkActive, HeaderHolder, LogOut, RouterLinkWithHref],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.scss',
})
export class AccountSettings {

}
