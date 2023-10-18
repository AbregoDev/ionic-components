import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(url);
    }
}
