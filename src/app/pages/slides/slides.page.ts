import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

    constructor(private toastController: ToastController) { }

    slideChange({ detail }: any) {
        const {
            previousIndex: previousSlideIndex,
            activeIndex: currentSlideIndex
        } = detail[0];

        this.presentStatusToast(previousSlideIndex, currentSlideIndex);
    }

    async presentStatusToast(previousIndex: number, currentIndex: number) {
        const message = `Previous slide: ${previousIndex}, Current slide: ${currentIndex}`;
        
        const toast = await this.toastController.create({
            message,
            duration: 1500,
            position: 'bottom',
        });

        await toast.present();
    }
}
