import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-user-growth',
  templateUrl: './user-growth.component.html',
  styleUrls: ['./user-growth.component.css'],
})
export class UserGrowthComponent implements OnInit {
	nIndustrial:number;
	nInformatica:number;
	nContaduria:number;
	nFiscales:number;
	custs = [];

    constructor(private dataService: DataService) {
          
    }
    options: Object;

    ngOnInit(){
    	this.getContaduria();
    	this.getFiscales();
    	this.getIndustrial();
    	this.getInformatica();
    	console.log(this.custs);
    	this.options = {
            chart: {
                type: 'column',
                margin: 75,
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            title: {
            	text: 'Ahora mismo en el campus:'
        	},
            series: [{
                data: [this.custs]
            }]
        };
    }


    getContaduria() {
    	this.dataService.getContaduria().subscribe(
      		data => console.log(data),
      		error => console.log(error)
    	);
    	
	}

    getInformatica(){
    	this.dataService.getInformatica().subscribe(
      		data =>  this.nInformatica= data,
      		error => console.log(error)
    	);

    	this.custs.push(this.nInformatica);
	}
    getIndustrial() {
    	this.dataService.getIndustrial().subscribe(
      		data => this.nIndustrial = data,
      		error => console.log(error)
    	);
    	  	this.custs.push(this.nIndustrial);
    }
     getFiscales() {
    	this.dataService.getFiscales().subscribe(
    		data => this.nFiscales = data,
    		error => console.log(error)
    	);
    	  this.custs.push(this.nFiscales);
    }



    }


 

