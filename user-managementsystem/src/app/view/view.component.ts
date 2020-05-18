import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Apiservice } from './../api.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public id:any;
  public user;

  constructor(private active:ActivatedRoute, private service:Apiservice, private router:Router) {
  }
    
    ngOnInit() {
      var that=this;
      this.active.params.subscribe(
        (res) =>{
   that.id=res.id;
      });
      this.service.fetchusers(that.id).subscribe(
        (res)=>{
        this.user=res;
        console.log(res);
        
      })
    
  }

  gotouser(){
  this.router.navigate(['/users'])
  }



}
