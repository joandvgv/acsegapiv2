import { Component, OnInit } from '@angular/core';  
import { Chart } from './chart.model';
import { DataService } from 'app/services/data.service';
declare var $: any;

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.css']
})
export class TopArticlesComponent implements OnInit{  
  nIndustrial:number;
  nInformatica:number;
  nContaduria:number;
  nFiscales:number;
  percentIndustrial:String;
  percentInformatica:String;
  percentFiscales:String;
  percentContaduria:String;
  nTotalVehicles:number;
  nTotalPeople:number;


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




}