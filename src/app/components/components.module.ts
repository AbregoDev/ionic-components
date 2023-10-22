import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ModalInfoComponent } from './modal-info/modal-info.component';



@NgModule({
    declarations: [
        HeaderComponent,
        ModalInfoComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        HeaderComponent,
        ModalInfoComponent,
    ]
})
export class ComponentsModule { }
