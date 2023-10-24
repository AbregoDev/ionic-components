import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-pop-over-info',
    templateUrl: './pop-over-info.component.html',
})
export class PopOverInfoComponent implements OnInit {

    items = Array(5);

    constructor(private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    onClick(index: number) {
        this.popoverCtrl.dismiss({ index })
    }
}
