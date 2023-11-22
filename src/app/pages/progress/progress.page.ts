import { Component } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.page.html',
    styleUrls: ['./progress.page.scss'],
})
export class ProgressPage {

    progress: number = 0;

    rangeChange(event: any) {
        const value = event.detail.value;
        this.progress = value / 100;
    }

}
