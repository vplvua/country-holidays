import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, shareReplay, throwError } from 'rxjs';

import { environment } from '../../environment/environment';
import { Country, CountryInfo, PublicHoliday } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  http = inject(HttpClient);

  countries$ = this.http
    .get<Country[]>(`${this.apiUrl}/api/v3/AvailableCountries`)
    .pipe(shareReplay(1), catchError(this.handleError));

  getCountryInfo(countryCode: string) {
    return this.http
      .get<CountryInfo>(`${this.apiUrl}/api/v3/CountryInfo/${countryCode}`)
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  getPublicHolidays(year: string, countryCode: string): Observable<PublicHoliday[]> {
    return this.http
      .get<PublicHoliday[]>(`${this.apiUrl}/api/v3/PublicHolidays/${year}/${countryCode}`)
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  getNextPublicHoliday(countryCode: string) {
    return this.http
      .get<PublicHoliday[]>(`${this.apiUrl}/api/v3/NextPublicHolidays/${countryCode}`)
      .pipe(
        map(holidays => holidays[0]),
        shareReplay(1),
        catchError(this.handleError),
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
