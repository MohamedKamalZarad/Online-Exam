import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit{
 ngOnInit(): void {
    initFlowbite();
  }
}
