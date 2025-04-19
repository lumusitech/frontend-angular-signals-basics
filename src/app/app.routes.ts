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
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
