import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    getGroupsByPageAndSize(arg0: number, itemsPerPage: number) {
        throw new Error("Method not implemented.");
    }


    public admin = [
        {
            username: "ashwin",
            password: '1234',
            token: "ashwin12345"
        }

    ]

    validateusers(username, password) {
        var fake = this.admin.filter(res => {
            if (res.username === username && res.password === password) {
                return true
            }
        })
        if (fake.length >= 1) {
            return fake[0].token
        }
    }

    constructor(private pageservice: HttpClient) {

    }

    pagefetch() {
        return this.pageservice.get('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=15');
    }
    paginationuser(data) {
        return this.pageservice.get('https://jsonplaceholder.typicode.com/comments?' + data);

    }
}