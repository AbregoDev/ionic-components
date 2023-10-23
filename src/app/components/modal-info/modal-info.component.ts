import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.component.html',
})
export class ModalInfoComponent implements OnInit {

    @Input()
    nombre: string = '';

    @Input()
    tipoUsuario: string = '';

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    exit(args?: any) {
        this.modalCtrl.dismiss(args);
    }
}
