import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  observable$: Observable<{}>;

  constructor(http: Http) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());

  }

  ngOnInit(){
     $(document).ready(function(){
        $(".button-collapse").sideNav();
       });
  
  }
}
