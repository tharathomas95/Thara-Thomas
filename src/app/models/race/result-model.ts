// import { AverageSpeedModel } from "./average-speed-model";
// import { FastestLapModel } from "./fastest-lap-model";
import { ConstructorModel } from "./../constructor-model";
import { DriverModel } from "./../driver-model";
// import { TimeModel } from "./time-model";

export class ResultModel {
  constructor() {
    this.number = 0;
    this.position = 0;
    this.positionText = 0;
    this.points = 0;
    this.Driver = new DriverModel();
    this.Constructor = new ConstructorModel();
    this.grid = 0;
    this.laps = 0;
    this.status = "";
    // this.Time = new TimeModel();
    // this.FastestLap = new FastestLapModel();
    // this.AverageSpeed = new AverageSpeedModel();
  }

  number: number;
  position: number;
  positionText: number;
  points: number;
  Driver: DriverModel;
  Constructor: ConstructorModel;
  grid: number;
  laps: number;
  status: string;
//   Time: TimeModel;
//   FastestLap: FastestLapModel;
//   AverageSpeed: AverageSpeedModel;
}
