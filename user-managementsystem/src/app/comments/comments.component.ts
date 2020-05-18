import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from './pagination.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {


  public mypage;

  pageresponse;
  currentPage;
  page: number;

  constructor(private router: Router, private servicepage: PaginationService, private form: FormBuilder) {
    this.getpage();
  }
  getpage() {
    var that = this;

    this.servicepage.pagefetch().subscribe(res => {
      that.pageresponse = res;
      console.log(that.pageresponse);
    })
  }
  pageChanged(event: any): void {
    this.page = event.page;
    if (this.page == 1) {
      this.servicepage.paginationuser('_page=1&_limit=15').subscribe(res => {
        this.pageresponse = res;
      })
    }
    if (this.page == 2) {
      this.servicepage.paginationuser('_page=2&_limit=15').subscribe(res => {
        this.pageresponse = res;
      })
    }
    if (this.page == 3) {
      this.servicepage.paginationuser('_page=3&_limit=15').subscribe(res => {
        this.pageresponse = res;
      })
    }
    if (this.page == 4) {
      this.servicepage.paginationuser('_page=4&_limit=15').subscribe(res => {
        this.pageresponse = res;
      })
    }
<<<<<<< HEAD
=======
    
    
>>>>>>> 3ab13876a46f09f1274297de57659b8098b8754a

    if (this.page == 5) {
      this.servicepage.paginationuser('_page=5&_limit=15').subscribe(res => {
        this.pageresponse = res;
      })
    }
  }
}
