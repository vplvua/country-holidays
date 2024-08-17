import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { HomeService } from '../home/home.service';
import { PublicHoliday } from '../models/models';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatIconModule,
    MatButton,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css',
})
export class CountryDetailComponent implements OnInit {
  pageTitle = '';
  countryCode: string | null = null;
  years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  currentYear = new Date().getFullYear();
  selectedYear = this.currentYear;
  countryHolidays: PublicHoliday[] = [];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.countryCode = params.get('countryCode');
      if (this.countryCode) {
        this.loadCountryDetails();
      }
    });
  }

  loadCountryDetails() {
    this.homeService
      .getAllPublicHolidays(this.selectedYear.toString(), this.countryCode!)
      .subscribe({
        next: holidays => {
          this.countryHolidays = holidays;
          this.createPageTitle();
        },
      });
  }

  createPageTitle() {
    this.homeService.getCountryInfo(this.countryCode!).subscribe({
      next: countryInfo => {
        this.pageTitle = `${this.selectedYear} Public Holidays in ${countryInfo.commonName} / ${countryInfo.officialName} / ${countryInfo.countryCode}`;
      },
    });
  }

  incrementYear() {
    if (this.selectedYear < this.years[this.years.length - 1]) {
      this.selectedYear++;
      this.loadCountryDetails();
    }
  }

  decrementYear() {
    if (this.selectedYear > this.years[0]) {
      this.selectedYear--;
      this.loadCountryDetails();
    }
  }

  onYearChange() {
    this.loadCountryDetails();
  }
}
