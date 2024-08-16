import { Component } from '@angular/core';

import { CountryListComponent } from './country-list/country-list.component';
import { RandomWidgetComponent } from './random-widget/random-widget.component';
import { UkraineHolidaysComponent } from './ukraine-holidays/ukraine-holidays.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryListComponent, RandomWidgetComponent, UkraineHolidaysComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
