import { Component, OnInit } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

    menuItems: MenuItem[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.menuItems = this.dataService.getMenuItems();
    }
}
