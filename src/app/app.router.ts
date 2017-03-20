import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DataService } from './services/data.service';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'inicio' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'login' },
  { loadChildren: 'app/home/home.module#HomeModule', path: 'home', canActivate: [DataService]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);

