import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/counter/counter.component'),
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero-page/hero-page.component'),
  },
  {
    path: 'dragonball',
    loadComponent: () =>
      import('./pages/dragonball-page/dragonball-page.component'),
  },
  {
    path: 'dragonball-super',
    loadComponent: () =>
      import('./pages/dragonball-super-page/dragonball-super-page.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
