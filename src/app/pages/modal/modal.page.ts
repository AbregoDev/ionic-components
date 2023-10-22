import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/components/modal-info/modal-info.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
})
export class ModalPage implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    async showModal() {
        const modal = await this.modalCtrl.create({
            component: ModalInfoComponent
        });

        await modal.present();
    }
}
