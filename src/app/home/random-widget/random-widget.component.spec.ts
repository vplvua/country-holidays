import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWidgetComponent } from './random-widget.component';

describe('RandomWidgetComponent', () => {
  let component: RandomWidgetComponent;
  let fixture: ComponentFixture<RandomWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
