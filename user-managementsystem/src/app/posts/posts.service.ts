import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
 export class PostsService{



    public fakedata=[
        {
          username:"ashwin",
          password:'1234',
          token:"ashwin1234"
        }
        
      ]
      
      fakeusers(username,password){
        var fake=this.fakedata.filter(res => {
      if(res.username === username && res.password===password){
        return true
      }
      })
      if(fake.length>=1){
        return fake[0].token
      }
      }
     constructor(private http:HttpClient){

     }
     fetchuser(){
         return this.http.get("http://jsonplaceholder.typicode.com/posts")
     }
 }