import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'country/:countryCode', component: CountryDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
