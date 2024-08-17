import { Component, computed, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { CountryListComponent } from './country-list/country-list.component';
import { RandomWidgetComponent } from './random-widget/random-widget.component';
import { UkraineHolidaysComponent } from './ukraine-holidays/ukraine-holidays.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryListComponent, RandomWidgetComponent, UkraineHolidaysComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  errorMessage = '';
  homeService = inject(HomeService);

  countries = computed(() => {
    try {
      return this.homeService.countryList();
    } catch (error) {
      this.errorMessage = typeof error === 'string' ? error : 'An error occurred';
      return [];
    }
  });

  // countries = computed(() => this.homeService.countryList());
  isLoading = computed(() => this.homeService.isLoading());
}
