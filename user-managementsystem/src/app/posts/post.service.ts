import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class PostService{
    constructor(private http:HttpClient){

    }
    fetchuser(){
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
    }
}