import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { SeasonWinnerComponent } from './components/season-winner/season-winner.component';
import { FormulaService } from './services/formula.service';

describe('AppComponent', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  let formulaservice;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [
        AppComponent,
        SeasonDetailsComponent,
        SeasonWinnerComponent,
      ],
      providers: [{ provide: FormulaService, useValue: {} }],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Mobiquitytest'`, () => {
    expect(app.title).toEqual('Mobiquitytest');
  });

  it('should render h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'World Champions'
    );
  });

  it('should render h5 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5')?.textContent).toContain('2005 - 2022');
  });

  const mockYearWinners = require('src/app/Mock/winner-mock.json');
  it('should call getAllYearChampions and get response', fakeAsync(() => {
    const component = fixture.debugElement.componentInstance;
    const formulaservice = fixture.debugElement.injector.get(FormulaService);
    let spy_getPosts = spyOn(
      formulaservice,
      'getAllYearChampions'
    ).and.returnValue(mockYearWinners);
    component.getAllYearChampions();
    tick(100);
    expect(component.allStandingList.length).toEqual(3);
    expect(formulaservice.getAllYearChampions).toHaveBeenCalled();
  }));

  const mockYearRaces = require('src/app/Mock/year-race-mock.json');
  it('should call viewSeasonDetails and get response', fakeAsync(() => {
    const component = fixture.debugElement.componentInstance;
    const formulaservice = fixture.debugElement.injector.get(FormulaService);
    let spy_getPosts = spyOn(
      formulaservice,
      'getYearRaceWinners'
    ).and.returnValue(mockYearRaces);
    component.viewSeasonDetails({
      Driver: mockYearRaces.MRData.RaceTable.Races[0].Results[0].Driver,
      year: mockYearRaces.MRData.RaceTable.Races[0].season,
    });
    tick(100);
    expect(component.viewedRaceList.length).toEqual(1);
    expect(formulaservice.getYearRaceWinners).toHaveBeenCalled();
  }));
});
