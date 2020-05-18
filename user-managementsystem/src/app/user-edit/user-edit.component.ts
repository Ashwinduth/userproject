import { Apiservice } from './../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public id:any;
  public users:any;
  public userdatastore={
    
  };

  constructor(private active:ActivatedRoute,private service:Apiservice,private router:Router) { }

  ngOnInit() {
    var that=this;
    this.active.params.subscribe((res)=>{
      that.id=res.id;
    });
    this.service.fetchusers(that.id).subscribe((res)=>{
      this.users=res;
    })
  }
  storeuserinfo(){
    console.log(this.userdatastore)

  }
  eraseuserinfo(){
    this.router.navigate(['/users'])

  }

}
