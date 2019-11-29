import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const ROUTES=[
  {
    path:'',
    pathMatch:'full',
    component:UsersComponent
  }
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    TooltipModule,
    ModalModule,
    PopoverModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule { }
