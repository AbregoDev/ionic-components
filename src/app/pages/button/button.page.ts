import { Component } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.page.html',
})
export class ButtonPage {

    currentIcon: 'heart-outline' | 'heart-half' | 'heart' = 'heart-outline';

    updateIcon() {
        switch (this.currentIcon) {
            case 'heart-outline': this.currentIcon = 'heart-half'; break;
            case 'heart-half': this.currentIcon = 'heart'; break;
            case 'heart': this.currentIcon = 'heart-outline'; break;
        }
    }
}
