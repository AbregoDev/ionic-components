import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.component.html',
})
export class ModalInfoComponent implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    exit() {
        this.modalCtrl.dismiss();
    }
}
