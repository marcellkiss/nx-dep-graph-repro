import { Route } from '@angular/router';

export const fruitRoutes: Route[] = [
  {
    path: 'apple',
    loadComponent: () =>
      import('@nx-angular-mono/frontend/fruit/feat-apple').then(
        (m) => m.AppleComponent
      ),
  },
  {
    path: 'banana',
    loadComponent: () =>
      import('@nx-angular-mono/frontend/fruit/feat-banana').then(
        (m) => m.BananaComponent
      ),
  },
  {
    path: 'long-apple',
    loadComponent: () =>
      import(
        '@nx-angular-mono/frontend/fruit/very-very-very-long-prefix-then-apple'
      ).then((m) => m.AppleComponent),
  },
  {
    path: 'long-banana',
    loadComponent: () =>
      import(
        '@nx-angular-mono/frontend/fruit/very-very-very-long-prefix-then-banana'
      ).then((m) => m.BananaComponent),
  },
];
