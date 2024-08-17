import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle } from '@angular/material/card';
import { NgFor, DatePipe } from '@angular/common';

import { PublicHoliday } from '../../models/models';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-ukraine-holidays',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, NgFor, DatePipe],
  templateUrl: './ukraine-holidays.component.html',
  styleUrl: './ukraine-holidays.component.css',
})
export class UkraineHolidaysComponent {
  pageTitle = 'Ukraine Holidays';
  holidays: PublicHoliday[] = [];

  constructor(private homeService: HomeService) {
    this.fetchHolidays();
  }

  fetchHolidays() {
    // fetch Ukraine holidays
    this.homeService.getAllPublicHolidays('2024', 'UA').subscribe({
      next: holidays => {
        this.holidays = [...holidays];
      },
      error: err => console.error('Error fetching Ukraine holidays', err),
    });
  }
}
