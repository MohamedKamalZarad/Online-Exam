import { Component, inject, Input, input, OnInit } from '@angular/core';

import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { routes } from '../../../../app.routes';
import { filter } from 'rxjs';

@Component({
  selector: 'navbar',
  imports: [RouterLink, ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar  {
  currentPath = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let parts = this.router.url.split('?')[0].split('/').filter(Boolean);

        if (parts[0]?.toLowerCase() === 'home') {
          parts.shift();
        }


        if (parts.some(part => part.toLowerCase() === 'quiz')) {
          this.currentPath = 'quiz';
          return;
        }

  
        let last = '';
        for (let i = parts.length - 1; i >= 0; i--) {
          const part = parts[i];
  
          if (isNaN(+part)) {
            last = part;
            break;
          }
        }

        this.currentPath = last;
      });
  }
}