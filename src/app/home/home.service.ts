import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ApiService } from '../api/api.service';
import { Country, PublicHoliday } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiService = inject(ApiService);

  countryList = toSignal(this.apiService.countries$, {
    initialValue: [] as Country[],
  });

  isLoading = signal(true);

  selectedCountry = signal<string | null>(null);

  constructor() {
    this.apiService.countries$.subscribe({
      next: () => this.isLoading.set(false),
      error: () => this.isLoading.set(false),
    });
  }

  selectCountry(countryCode: string) {
    this.selectedCountry.set(countryCode);
  }

  getCountryInfo(countryCode: string) {
    return this.apiService.getCountryInfo(countryCode);
  }

  getNextPublicHoliday(countryCode: string) {
    return this.apiService.getNextPublicHoliday(countryCode);
  }

  getAllPublicHolidays(year: string, countryCode: string): Observable<PublicHoliday[]> {
    return this.apiService.getPublicHolidays(year, countryCode);
  }
}
