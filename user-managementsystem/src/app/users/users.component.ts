import { Apiservice } from './../api.service';
import { Component,TemplateRef  } from '@angular/core';
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector:'app-users',
    templateUrl:'users.component.html',
    styleUrls:['users.component.scss']
})
export class UsersComponent {
    public users:any;
    private info;
    modalRef: BsModalRef;
    
    constructor(private router:Router, private data:Apiservice,private modalService:BsModalService){
        this.users = Array(10).fill(0);
        this.getusers();       
    }
    edituser(id:any){
        this.router.navigate(['user-edit',id])
    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
    getusers(){
        var that=this;
        this.data.fetchuser().subscribe((res)=>{
            that.users=res;
            that.data.Userdata=res;
        })
        
    }
    onselect(event){
        var self=this;
        self.info=event;
        console.log(self.info);
        if(self.info){
            self.users=self.data.Userdata.filter(function(val,index){
                return val.id==self.info.id
            })

        }
        else{
            self.users=self.data.Userdata;
        }
    }
   
}