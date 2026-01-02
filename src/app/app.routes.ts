import { Routes } from '@angular/router';
import { SignUp } from './features/auth/sign-up/sign-up';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/features/auth/auth.routes').then((m) => m.auth_routes),
  },
  {
    path: 'callback',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((m) => m.dashboard_routes),
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
