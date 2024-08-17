import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCountryLink]',
  standalone: true,
})
export class CountryLinkDirective implements AfterViewInit {
  @Input('appCountryLink') countryCode = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    const text = this.el.nativeElement.textContent.trim();
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '');

    const link = this.renderer.createElement('a');
    this.renderer.setProperty(link, 'href', `/country/${this.countryCode}`);
    this.renderer.setProperty(link, 'textContent', text);

    this.renderer.appendChild(this.el.nativeElement, link);

    this.renderer.setStyle(link, 'color', '#0000EE');
    this.renderer.setStyle(link, 'text-decoration', 'underline');
    this.renderer.setStyle(link, 'cursor', 'pointer');

    this.renderer.listen(link, 'click', (event: Event) => {
      event.preventDefault();
      this.router.navigate(['/country', this.countryCode]);
    });
  }
}
