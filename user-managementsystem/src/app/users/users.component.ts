import { Apiservice } from './../api.service';
import { Component,TemplateRef ,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector:'app-users',
    templateUrl:'users.component.html',
    styleUrls:['users.component.scss']
})
export class UsersComponent implements OnInit{
    public users;
    public info;
    modalRef: BsModalRef;
    
    constructor(private router:Router, private data:Apiservice,private modalService:BsModalService){
        this.getusers();       
    }
 
    openModal(template:TemplateRef<any>) {
        this.modalRef=this.modalService.show(template);
      }
      ngOnInit(){

      }
    getusers(){
        var that=this;
        this.data.fetchuser().subscribe((res)=>{
            that.users=res;
            that.data.Userdata=res;
        })
        
    }
    onselect(event){
        var that=this;
        that.info=event;
        console.log(that.info);//check the info
        if(that.info){
            that.users=that.data.Userdata.filter(function(val,index){
                return val.id==that.info.id
            })

        }
        else{
            that.users=that.data.Userdata;
        }
    }
   
}