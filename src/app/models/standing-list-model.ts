import { DriverStandingModel } from "./driver-standing-model";

export class StandingListModel {
  constructor() {
    this.season = 0;
    this.round = 0;
    this.DriverStandings = [];
  }

  season: number;
  round: number;
  DriverStandings: Array<DriverStandingModel>;
}