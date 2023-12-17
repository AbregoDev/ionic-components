import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
})
export class SegmentPage implements OnInit {

    characters!: Observable<any>;
    publisherToFilter: string = '';

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.characters = this.dataService.getCharacters();
    }

    segmentChange(event: any) {
        this.publisherToFilter = event.detail.value;
    }
}
