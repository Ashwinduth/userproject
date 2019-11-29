import { Commentsservice } from './comments.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.scss']
})
export class CommentsComponent {
  maxSize = 3;
  bigTotalItems = 175;
  bigCurrentPage = 1;

  public comments:any;
  
    constructor(private router:Router, private data:Commentsservice){
        this.getusers();       
    }
    getusers(){
        var that=this;
        this.data.fetchuser().subscribe((res)=>{
            that.comments=res;
        })
    }
    page()
    

}
