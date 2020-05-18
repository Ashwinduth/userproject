import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    component: CommentsComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule


  ],
  declarations: [
    CommentsComponent
  ]
})
export class CommentsModule {

}