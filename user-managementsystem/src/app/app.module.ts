import { Guardservice } from './login/guard.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common'
import { UserEditComponent } from './user-edit/user-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,ActivatedRoute } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';


const Routes=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {

    path:'user-edit/:id',
    component:UserEditComponent
  },
  {
    path:'view/:id',
    component:ViewComponent

  },
  {
    path:'users',
    loadChildren:'./users/users.module#UsersModule',
    CanActivate:[Guardservice]
  },
  {
    path:'posts',
    loadChildren:'./posts/posts.module#PostsModule'
  
  },
  {
    path:'comments',
    loadChildren:'./comments/comments.module#CommentsModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    UserEditComponent,
    ViewComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    
    RouterModule.forRoot(Routes,{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }