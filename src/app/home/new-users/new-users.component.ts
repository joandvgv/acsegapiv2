import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'app/services/data.service';
import {DatatableComponent} from '@swimlane/ngx-datatable';



declare var $: any;
@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css'],
  providers: [
    DataService
  ]
})
export class NewUsersComponent implements OnInit {

  totalMonth: number;
  totalHour: number;
  users: any;
  logs = [];
  rows = [];
  temp = [];
  temp2 = []

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private dataService: DataService) {
    this.getVehicleLogs();
    this.getPeopleLogs();
}




  getVehicleLogs() {
    this.dataService.getVehicleLogs().subscribe(
      data => {this.temp=[...data]; this.rows = data;},
      error => console.log(error)
    );
  }

    getPeopleLogs() {
    this.dataService.getPeopleLogs().subscribe(
      data => {this.temp2=[...data]; this.logs = data; console.log(data)},
      error => console.log(error)
    );
  }



  ngOnInit() {
    this.getPeopleLogs();
    this.getHourlyUsers();
    this.getMonthlyUsers();

    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

        
       
  }


  getMonthlyUsers() {
    this.dataService.getMonthlyUsers().subscribe(
      data => this.totalMonth = data,
      error => console.log(error)
    );
  }

  getHourlyUsers() {
    this.dataService.getHourlyUsers().subscribe(
      data => this.totalHour = data,
      error => console.log(error)
    );
  }

  fillLogs(data){
    for (var i in data){
      this.logs.push([i,data[i]]);
      console.log(data[i]);
    }

  }

   updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.mtrAuto.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

   updateFilterCI(event) {
    const val = event.target.value;
    console.log(val);

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.CI.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.logs = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }




}