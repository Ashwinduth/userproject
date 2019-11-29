import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class Commentsservice{
    constructor(private http:HttpClient){

    }
    fetchuser(){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10")
    }
}