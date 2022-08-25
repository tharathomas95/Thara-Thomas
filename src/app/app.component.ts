import { Component, OnInit } from '@angular/core';
import { RaceModel } from './models/race/race-model';
import { SeasonModel } from './models/season-model';
import { StandingListModel } from './models/standing-list-model';
import { FormulaService } from './services/formula.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mobiquitytest';
  isLoading: boolean = false;
  allStandingList: Array<StandingListModel> = [];
  viewedRaceList: Array<RaceModel> = [];

  constructor(
    private formulaService: FormulaService,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.getAllYearChampions();
  }

  /**Get Champions list (2005 - 2022) */
  getAllYearChampions() {
    this.formulaService.getAllYearChampions().subscribe((response: any) => {
      this.allStandingList =
        response.MRData.StandingsTable.StandingsLists.filter(
          (i: any) => i['season'] >= 2005
        );
    });
  }

  /*get winner of race for a partucular season */
  viewSeasonDetails(driverAndYearObj: SeasonModel) {
    this.viewedRaceList = [];
    this.formulaService
      .getYearRaceWinners(driverAndYearObj.year)
      .subscribe((response: any) => {
        this.viewedRaceList = response.MRData.RaceTable.Races;
        const modalRef = this.modalService.open(SeasonDetailsComponent);
        modalRef.componentInstance.driverAndYear = driverAndYearObj;
        modalRef.componentInstance.races = this.viewedRaceList;
      });
  }
}
