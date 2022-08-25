import { ConstructorModel } from "./constructor-model";
import { DriverModel } from "./driver-model";


export class DriverStandingModel{
    constructor() {
        this.position = 0;
        this.positionText = 0;
        this.points = 0;
        this.wins = 0;
        this.Driver = new DriverModel();
        this.Constructors = [];
      }
    
      position: number;
      positionText: number;
      points: number;
      wins: number;
      Driver: DriverModel;
      Constructors: Array<ConstructorModel>;

}