import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.router';
import { SharedModule } from './shared/shared.module';
import { DataService } from './services/data.service';
import { ToastComponent } from './shared/toast/toast.component';
import {RecordsModule} from './dashboard/records/records.module'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent
  ],
   bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
