import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatCard } from '@angular/material/card';
import {
  MatCardHeader,
  MatCardTitle,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatList, MatListItem } from '@angular/material/list';
import { NgFor, NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { Country } from '../../models/models';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatList,
    MatListItem,
    NgFor,
    NgIf,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    FormsModule,
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent implements OnInit, OnChanges {
  @Input() countries!: Country[];
  @Input() isLoading!: boolean;
  pageTitle = 'Countries';

  filteredCountries: Country[] = [];
  searchText = '';

  ngOnInit() {
    this.filteredCountries = this.countries;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countries']) {
      this.updateFilteredCountries();
    }
  }

  updateFilteredCountries() {
    this.filteredCountries = [...this.countries];
  }

  onSearchChange() {
    this.filterCountries();
  }

  filterCountries() {
    if (!this.searchText) {
      this.filteredCountries = [...this.countries];
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(this.searchText.toLowerCase()),
      );
    }
  }

  trackByCountryCode(index: number, country: Country): string {
    return country.countryCode;
  }
}
