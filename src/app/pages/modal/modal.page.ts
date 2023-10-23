import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/components/modal-info/modal-info.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
})
export class ModalPage implements OnInit {

    receivedData: any;

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    async showModal() {
        const modal = await this.modalCtrl.create({
            component: ModalInfoComponent,
            componentProps: {
                nombre: 'Bryan',
                tipoUsuario: 'Admin',
            }
        });

        await modal.present();

        const { data } = await modal.onDidDismiss();

        this.receivedData = data;
    }
}
