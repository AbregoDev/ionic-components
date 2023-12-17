import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SlidesPage } from './slides.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{ path: '', component: SlidesPage }]),
        ComponentsModule,
    ],
    declarations: [SlidesPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesPageModule { }
