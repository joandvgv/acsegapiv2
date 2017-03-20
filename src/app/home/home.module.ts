import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { routing } from './home.router';
import { UserGrowthComponent } from './user-growth/user-growth.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { TopArticlesComponent } from './top-articles/top-articles.component';
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
    HomeComponent,
    UserGrowthComponent,
    NewCommentsComponent,
    NewUsersComponent,
    TopArticlesComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {}
