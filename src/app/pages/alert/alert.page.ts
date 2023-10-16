import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
})
export class AlertPage {

    constructor(private alertController: AlertController) { }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Important message',
            message: 'This is an alert!',
            buttons: ['Ok'],
            backdropDismiss: false,
        });

        await alert.present();
    }

    async presentAlertMulti() {
        const alert = await this.alertController.create({
            header: 'Alert',
            message: 'Multi buttons with handlers!',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => { console.log('\'Ok\' button pressed!') }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => { console.log('\'Cancel\' button pressed!') }
                },
            ],
            backdropDismiss: false,
        });

        await alert.present();
    }

    async presentAlertForm() {
        const alert = await this.alertController.create({
            header: 'Alert',
            message: 'Fill the form',
            inputs: [
                {
                    label: 'nombre',
                    name: 'nombre_field',
                    placeholder: 'Name',
                },
                {
                    placeholder: 'Nickname (max 8 characters)',
                    attributes: {
                        maxlength: 8,
                    },
                },
                {
                    type: 'number',
                    placeholder: 'Age',
                    min: 1,
                    max: 100,
                },
                {
                    type: 'textarea',
                    placeholder: 'A little about yourself',
                },
            ],
            buttons: [
                {
                    text: 'Ok',
                    handler: console.log,
                },
                'Cancel'
            ],
            backdropDismiss: false,
        });

        await alert.present();
    }
}
