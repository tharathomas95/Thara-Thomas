import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonWinnerComponent } from './season-winner.component';

describe('SeasonWinnerComponent', () => {
  let component: SeasonWinnerComponent;
  let fixture: ComponentFixture<SeasonWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonWinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
