import { LocationModel } from "./location-model";

export class CircuitModel {
  constructor() {
    this.circuitId = "";
    this.url = "";
    this.circuitName = "";
    this.Location = new LocationModel();
  }

  circuitId: string;
  url: string;
  circuitName: string;
  Location: LocationModel;
}
