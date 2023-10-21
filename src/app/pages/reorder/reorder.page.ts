import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
    selector: 'app-reorder',
    templateUrl: './reorder.page.html',
})
export class ReorderPage {

    langs: string[] = ['Javascript', 'Typescript', 'C#', 'Python', 'Rust', 'Go'];
    isListDisabled: boolean = false;

    handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
        console.log({ event });

        const itemOver = this.langs.splice(event.detail.from, 1)[0];
        console.log({ itemOver });
        this.langs.splice(event.detail.to, 0, itemOver);

        console.log({ langs: this.langs });

        event.detail.complete();
    }
}
