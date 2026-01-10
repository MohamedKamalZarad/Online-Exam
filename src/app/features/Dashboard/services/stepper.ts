import { Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {

  breadcrumbs = signal<{ label: string; url: string }[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const crumbs = this.build(this.route.root);
        this.breadcrumbs.set(crumbs);
      });
  }

  private build(route: ActivatedRoute, url = '', res: any[] = []): any[] {
    if (!route.children || route.children.length === 0) return res;

    for (const child of route.children) {
      const part = child.snapshot.url.map(s => s.path).join('/');
      const nextUrl = part ? `${url}/${part}` : url;

      const label = child.snapshot.data['breadcrumb'];
      if (label) res.push({ label, url: nextUrl });

      // استدعاء الدالة على كل children
      this.build(child, nextUrl, res);
    }

    return res;
  }
}
