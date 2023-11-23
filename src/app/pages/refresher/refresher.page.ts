import { Component } from '@angular/core';

@Component({
    selector: 'app-refresher',
    templateUrl: './refresher.page.html',
})
export class RefresherPage {

    items: any = Array(3);

    handleRefresh(event: any) {
        setTimeout(() => {
            this.items = Array(10);
            event.target.complete();
        }, 1500);
    }
}
