import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverInfoComponent } from 'src/app/components/pop-over/pop-over-info.component';

@Component({
    selector: 'app-pop-over',
    templateUrl: './pop-over.page.html',
})
export class PopOverPage implements OnInit {

    constructor(private popoverCtrl: PopoverController) { }

    ngOnInit() {
    }

    async presentPopover(event: any) {
        console.log({ event });

        const popver = await this.popoverCtrl.create({
            component: PopOverInfoComponent,
            event,
            translucent: true,
            backdropDismiss: false,
        });

        await popver.present();

        const { data } = await popver.onWillDismiss();
        console.log(data);
    }

}
