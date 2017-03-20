import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.router';
import { RecordsComponent } from './records/records.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
  ],
  declarations: [
    DashboardComponent,
    RecordsComponent,
    StatisticsComponent
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule {}
