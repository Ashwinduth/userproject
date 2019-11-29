import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

const ROUTES=[
  {
      path:'',
      pathMatch:'full',
      component:PostsComponent
  }
 
]


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PostsModule { }
