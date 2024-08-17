import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ApiService } from '../api/api.service';
import { Country } from '../models/models';

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
}
