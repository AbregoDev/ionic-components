import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'app-action-sheet',
    templateUrl: './action-sheet.page.html',
})
export class ActionSheetPage {

    constructor(private actionSheetCtrl: ActionSheetController) { }

    openActionSheet() {
        this.presentActionSheet();
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            header: 'Actions',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash-outline',
                    handler: () => { console.log('Delete clicked!') },
                },
                {
                    text: 'Share',
                    icon: 'share-outline',
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'close-outline',
                },
            ],
        });

        await actionSheet.present();
    }
}
