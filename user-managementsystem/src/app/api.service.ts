import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class Apiservice {

    public Userdata;
    public manualdata=[
        {
            username:'ashwin',
            password:'1234',
            token:'ashwinxyz123'
        },
        {
            username:'admin',
            password:'1234',
            token:'adminxyz123'
        },
  
    ]
    validateuser(username,password) {
        
        var buffer= this.manualdata.filter(val =>{
            if(val.username === username && val.password === password){
                return true;
            }

        })
        if(buffer.length>=1){
            return buffer[0].token
        }
        
    }
   
    constructor(private http:HttpClient){

    }
    fetchuser(){
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
    fetchusers(id){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
}