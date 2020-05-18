import { Apiservice } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:Apiservice) { }

  ngOnInit() {
  }
  validuser(username,password,event){
    var student=this.service.validateuser(username,password);
    if(typeof student !=="undefined"){
        localStorage.setItem('student', student)
        this.router.navigate(['users'])
    }
     
    else{
      localStorage.removeItem('token');
    }
  }
}


