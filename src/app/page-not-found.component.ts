import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <h1>This is not the page you were looking for!</h1>
    <a mat-button routerLink="/home">Go to Home Page</a>
  `,
})
export class PageNotFoundComponent {}
