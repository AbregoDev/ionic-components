import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.page.html',
})
export class InfiniteScrollPage implements OnInit {

    data: any[] = Array(20);

    @ViewChild(IonInfiniteScroll)
    infiniteScroll!: IonInfiniteScroll;

    constructor() { }

    ngOnInit() {
    }

    loadData() {
        if (this.data.length > 50) {
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return;
        }

        setTimeout(() => {
            const arr = Array(20);
            this.data.push(...arr);

            this.infiniteScroll.complete();
        }, 1500);
    }

}
