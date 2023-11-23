import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import data from '../../assets/data/menu-items.json';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(url);
    }

    getAlbums() {
        const url = 'https://jsonplaceholder.typicode.com/albums';
        return this.http.get<any[]>(url);
    }

    getMenuItems(): MenuItem[] {
        return data as MenuItem[];
    }
}
