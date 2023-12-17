import { Component } from '@angular/core';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

    isToastOpen: boolean = false;
    toastMessage: string = '';

    slideChange({ detail }: any) {
        const {
            previousIndex: previousSlideIndex,
            activeIndex: currentSlideIndex
        } = detail[0];
        this.toastMessage = `Previous slide: ${previousSlideIndex}, Current slide: ${currentSlideIndex}`;
        this.isToastOpen = true;
    }

    setToastVisibility(isToastVisible: boolean) {
        this.isToastOpen = isToastVisible;
    }
}
