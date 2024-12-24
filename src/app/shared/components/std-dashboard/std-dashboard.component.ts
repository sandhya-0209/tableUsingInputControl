import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/table';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {

  stdArray: Array<Istd> = [];

  constructor() { }
  ngOnInit(): void {
  }

    // create a function to get new student data to be added to the array
    getnewStd(std: Istd) {
      this.stdArray.push(std);
    }
  

}
