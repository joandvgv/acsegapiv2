import { Component, OnInit } from '@angular/core';  
import { DataService } from 'app/services/data.service';
declare var $: any;

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{  
  nIndustrial:number;
  nInformatica:number;
  nContaduria:number;
  nFiscales:number;
  nVehicleIndustrial:number;
  nVehicleInformatica:number;
  nVehicleContaduria:number;
  nVehicleFiscales:number;
  percentIndustrial:String;
  percentInformatica:String;
  percentFiscales:String;
  percentContaduria:String;
  nTotalVehicles:number;
  nTotalPeople:number;
  vehiclePercentIndustrial:String;
  vehiclePercentInformatica:String;
  vehiclePercentFiscales:String;
  vehiclePercentContaduria:String;



  constructor (private dataService: DataService) {

   
  }

  ngOnInit(){
    this.getContaduria();
    this.getInformatica();
    this.getIndustrial();
    this.getFiscales();
    this.getPercentIndustrial();
    this.getPercentContaduria();
    this.getPercentInformatica();
    this.getPercentFiscales();
    this.getTotalPeople();
    this.getTotalVehicles();
    this.getVehiclesIndustrial();
    this.getVehiclesInformatica();
    this.getVehiclesContaduria();
    this.getVehiclesFiscales();
    this.getVehiclePercentIndustrial();
    this.getVehiclePercentInformatica();
    this.getVehiclePercentContaduria();
    this.getVehiclePercentFiscales();
  }


   getContaduria() {
      this.dataService.getContaduria().subscribe(
          data => this.nContaduria = data,
          error => console.log(error)
      );
      
  }

    getInformatica(){
      this.dataService.getInformatica().subscribe(
          data =>  this.nInformatica= data,
          error => console.log(error)
      );

  }
    getIndustrial() {
      this.dataService.getIndustrial().subscribe(
          data => this.nIndustrial = data,
          error => console.log(error)
      );
    }
     getFiscales() {
      this.dataService.getFiscales().subscribe(
        data => this.nFiscales = data,
        error => console.log(error)
      );
    }

    getPercentIndustrial(){
      this.dataService.getPercentIndustrial().subscribe(
        data => this.percentIndustrial = data,
        error => console.log(error)
        );
      }

       getPercentInformatica(){
      this.dataService.getPercentInformatica().subscribe(
        data => this.percentInformatica = data,
        error => console.log(error)
        );
      }

       getPercentContaduria(){
      this.dataService.getPercentContaduria().subscribe(
        data => this.percentContaduria = data,
        error => console.log(error)
        );
      }

       getPercentFiscales(){
      this.dataService.getPercentFiscales().subscribe(
        data => this.percentFiscales = data,
        error => console.log(error)
        );
      }

       getVehiclesInformatica(){
      this.dataService.getVehiclesInformatica().subscribe(
        data => this.nVehicleInformatica = data,
        error => console.log(error)
        );
      }

       getVehiclesContaduria(){
      this.dataService.getVehiclesContaduria().subscribe(
        data => this.nVehicleContaduria = data,
        error => console.log(error)
        );
      }

      getVehiclesFiscales(){
      this.dataService.getVehiclesFiscales().subscribe(
        data => this.nVehicleFiscales = data,
        error => console.log(error)
        );
      }

       getVehiclesIndustrial(){
      this.dataService.getVehiclesIndustrial().subscribe(
        data => this.nVehicleIndustrial = data,
        error => console.log(error)
        );
      }

       getTotalVehicles(){
      this.dataService.getTotalVehicles().subscribe(
        data => this.nTotalVehicles = data,
        error => console.log(error)
        );
      }

       getTotalPeople(){
      this.dataService.getTotalPeople().subscribe(
        data => this.nTotalPeople = data,
        error => console.log(error)
        );
      }


    getVehiclePercentIndustrial(){
      this.dataService.getVehiclePercentIndustrial().subscribe(
        data => this.vehiclePercentIndustrial = data,
        error => console.log(error)
        );
      }

       getVehiclePercentInformatica(){
      this.dataService.getVehiclePercentInformatica().subscribe(
        data => this.vehiclePercentInformatica = data,
        error => console.log(error)
        );
      }

       getVehiclePercentContaduria(){
      this.dataService.getVehiclePercentContaduria().subscribe(
        data => this.vehiclePercentContaduria = data,
        error => console.log(error)
        );
      }

       getVehiclePercentFiscales(){
      this.dataService.getVehiclePercentFiscales().subscribe(
        data => this.vehiclePercentFiscales = data,
        error => console.log(error)
        );
      }
}
