import { CircuitModel } from "./circuit-model";
import { ResultModel } from "./result-model";

export class RaceModel {
  constructor() {
    this.season = 0;
    this.round = 0;
    this.url = "";
    this.raceName = "";
    this.Circuit = new CircuitModel();
    this.date = "";
    this.time = "";
    this.Results = [];
  }

  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: CircuitModel;
  date: string;
  time: string;
  Results: Array<ResultModel>;
}
