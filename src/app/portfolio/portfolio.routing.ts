import { Routes } from '@angular/router';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main/main.component').then((c) => c.MainComponent),
  },
];
