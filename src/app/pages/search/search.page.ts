import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
})
export class SearchPage implements OnInit {

    albums: any[] = [];
    filterText: string = '';

    constructor(private dataService: DataService) { }
    
    ngOnInit(): void {
        this.dataService.getAlbums().subscribe(albumsData => {
            this.albums = albumsData;
        })
    }

    onSearchChange(event: any) {
        this.filterText = event.detail.value;
    }
}
