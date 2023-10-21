import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-list',
    templateUrl: './sliding-item.page.html',
    styles: [`
        .small-text {
            font-size: 12px;
        }
    `]
})
export class SlidingItemPage {

    users!: Observable<any>;

    @ViewChild(IonList)
    ionList!: IonList;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.users = this.dataService.getUsers();
    }

    archive() {
        console.log('archive');
        this.ionList.closeSlidingItems();
    }

    delete() {
        console.log('delete');
        this.ionList.closeSlidingItems();
    }
}
