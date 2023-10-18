import { Component } from '@angular/core';

interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'app-input',
    templateUrl: './input.page.html',
})
export class InputPage {

    pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    usuario: User = {
        email: '',
        password: '',
    }

    onSubmit() {
        console.log({ user: this.usuario });
    }
}
