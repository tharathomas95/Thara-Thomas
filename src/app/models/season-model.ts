import { DriverModel } from "./driver-model";

export class SeasonModel {
  constructor() {
    this.year = 0;
    this.Driver = new DriverModel();
  }

  year: number;
  Driver: DriverModel;
}
