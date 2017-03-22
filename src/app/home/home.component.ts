import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
 import { MaterializeAction } from 'angular2-materialize';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  feeds$: Observable<{}>;
   modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  constructor(public fb: FormBuilder) {

   

    this.form = fb.group({
      text: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

 

   ngOnInit() {
    $(document).ready(function(){
      $('.slider').slider({height: 500,
                          indicators: false
                          });
    });
       }
}
