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
            username:'rocky',
            password:'1234',
            token:'rockyxyz123'
        },
        {
            username:'test',
            password:'1234',
            token:'testxyz123'
        }
    ]
    validateuser(username,password) {
        
        var buffer= this.manualdata.filter(use =>{
            if(use.username === username && use.password === password){
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
    fetchusers(id:any){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
}