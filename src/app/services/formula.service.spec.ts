import { TestBed } from '@angular/core/testing';

import { FormulaService } from './formula.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('FormulaService', () => {
  let service: FormulaService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FormulaService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TEST getAllYearChampions()

  const mockYearWinners = require('src/app/Mock/winner-mock.json');
  it('getAllYearChampions should return data', () => {
    service.getAllYearChampions().subscribe((res) => {
      expect(res).toEqual(mockYearWinners);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `http://ergast.com/api/f1/driverstandings/1.json?limit=65&offset=30`,
    });
    req.flush(mockYearWinners);
  });

  //TEST getYearRaceWinners() with year 2008
  const mockYearRaces = require('src/app/Mock/year-race-mock.json');

  it('getYearRaceWinners() should return data for a particular year', () => {
    service.getYearRaceWinners(2008).subscribe((res) => {
      expect(res).toEqual(mockYearRaces);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `"http://ergast.com/api/f1/2008/results/1.json"`,
    });
    req.flush(mockYearRaces);
  });
});
