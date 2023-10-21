import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.page.html',
})
export class LoadingPage {

    loading!: HTMLIonLoadingElement;

    constructor(private loadingCtrl: LoadingController) { }

    showLoadingSync() {
        this.showLoading();

        setTimeout(() => {
            this.loading.dismiss();
        }, 3000);
    }

    async showLoading() {
        this.loading = await this.loadingCtrl.create({
            message: 'Dismissing after 3 seconds...',
        });

        this.loading.present();
    }
}
