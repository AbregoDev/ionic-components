import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.page.html',
})
export class DateTimePage {

    private _currentDate: Date;
    private _currentDateMinus10Days: Date;
    private _currentDatePlus10Days: Date;

    get currentDate(): string {
        return this._currentDate.toISOString();
    }

    get maxDate(): string {
        return this._currentDatePlus10Days.toISOString();
    }

    get minDate(): string {
        return this._currentDateMinus10Days.toISOString();
    }

    constructor() {
        this._currentDate = new Date();
        const dateString = this._currentDate.toString()
        this._currentDateMinus10Days = this.addDateOffset(dateString, -10);
        this._currentDatePlus10Days = this.addDateOffset(dateString, 10);
    }

    addDateOffset(date: string, offset: number): Date {
        const dateObj = new Date(date);

        const _date = dateObj.getDate();
        dateObj.setDate(_date + offset);

        return dateObj;
    }
}
