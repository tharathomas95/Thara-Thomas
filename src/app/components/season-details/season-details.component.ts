import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RaceModel } from 'src/app/models/race/race-model';
import { SeasonModel } from 'src/app/models/season-model';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss'],
})
export class SeasonDetailsComponent implements OnInit {
  @Input() driverAndYear: SeasonModel = new SeasonModel();
  @Input() races: Array<RaceModel> = new Array<RaceModel>();
  searchString: any;
  filteredlist: any = [];
  actuallist: any = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.actuallist = this.races;
  }

  onSearch(value: any) {
    this.filteredlist = [];
    if (value.value != null && value.value != undefined && value.value != '') {
      this.actuallist.filter((element: any) => {
        if (element.raceName.toLowerCase().includes(value.value)) {
          this.filteredlist.push(element);
        }
      });
      this.races = [];
      this.races = this.filteredlist;
    } else {
      this.races = this.actuallist;
    }
  }
}
