import { PostService } from './post.service';
import { Apiservice } from './../api.service';
import { Component } from "@angular/core";

@Component({
    selector:'app-posts',
    templateUrl:'posts.component.html',
    styleUrls:['posts.component.scss']
})
export class PostsComponent{

    public users:any;
  
    constructor(private data:PostService){
        this.getusers();       
    }
    getusers(){
        var that=this;
        this.data.fetchuser().subscribe((res)=>{
            that.users=res;
        })
    }
}