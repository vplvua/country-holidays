import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { NgFor, DatePipe } from '@angular/common';

import { Country, CountryInfo, PublicHoliday } from '../../models/models';
import { HomeService } from '../home.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-random-widget',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, NgFor, DatePipe],
  templateUrl: './random-widget.component.html',
  styleUrl: './random-widget.component.css',
})
export class RandomWidgetComponent implements OnChanges {
  @Input() countries!: Country[];
  pageTitle = 'Next Public Holiday';
  selectedCountries: CountryNextHoliday[] = [];

  constructor(private homeService: HomeService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countries']) {
      this.selectRandomCountries();
    }
  }

  selectRandomCountries() {
    const shuffled = [...this.countries].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const requests = selected.map(country =>
      forkJoin({
        info: this.homeService.getCountryInfo(country.countryCode),
        nextHoliday: this.homeService.getNextPublicHoliday(country.countryCode),
      }),
    );

    forkJoin(requests).subscribe({
      next: results => {
        this.selectedCountries = results.map((result, index) => ({
          country: selected[index],
          info: result.info,
          nextHoliday: result.nextHoliday,
        }));
      },
      error: err => console.error('Error fetching country details', err),
    });
  }
}

interface CountryNextHoliday {
  country: Country;
  info: CountryInfo;
  nextHoliday: PublicHoliday;
}
