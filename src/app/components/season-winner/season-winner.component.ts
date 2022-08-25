import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeasonModel } from 'src/app/models/season-model';
import { StandingListModel } from 'src/app/models/standing-list-model';

@Component({
  selector: 'app-season-winner',
  templateUrl: './season-winner.component.html',
  styleUrls: ['./season-winner.component.scss'],
})
export class SeasonWinnerComponent implements OnInit {
  @Input() standingList: StandingListModel = new StandingListModel();
  @Output() viewSeasonEvent: EventEmitter<SeasonModel> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClickSeason() {
    let clickEvent: SeasonModel = new SeasonModel();
    clickEvent.year = this.standingList.season;
    clickEvent.Driver = this.standingList.DriverStandings[0].Driver;
    this.viewSeasonEvent.emit(clickEvent);
  }
}
