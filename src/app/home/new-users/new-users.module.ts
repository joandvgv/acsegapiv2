import { DataTableModule } from "angular2-datatable";
import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NewUsersComponent }   from './new-users.component';
import { DataFilterPipe }   from './data-filters.pipe';


@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ NewUsersComponent, DataFilterPipe],
  exports: [NewUsersComponent]
})

export class NewUsersModule { }
