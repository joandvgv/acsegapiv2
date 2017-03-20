import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RecordsComponent }   from './records.component';

@NgModule({
  imports:      [ 
    CommonModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ RecordsComponent],
  exports: [RecordsComponent]
})

export class RecordsModule { }
