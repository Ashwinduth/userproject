import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

const Routes=[
  {
    path:'',
    pathMatch:'full',
    component:CommentsComponent
  }
]

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    PaginationModule,
    RouterModule.forChild(Routes)
  ]
})
export class CommentsModule { }
