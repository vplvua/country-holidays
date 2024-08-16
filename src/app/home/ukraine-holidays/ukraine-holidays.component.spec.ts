import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkraineHolidaysComponent } from './ukraine-holidays.component';

describe('UkraineHolidaysComponent', () => {
  let component: UkraineHolidaysComponent;
  let fixture: ComponentFixture<UkraineHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkraineHolidaysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UkraineHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
