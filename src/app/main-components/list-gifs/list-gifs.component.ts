import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrls: ['./list-gifs.component.scss'],
})
export class ListGifsComponent implements OnInit {
  gifList: String[] = [];
  searchtext: string = '';

  constructor(private _gifService: GifsService) {}

  ngOnInit(): void {
    this.getGifLists();
  }

  getGifLists() {
    this._gifService.getGifList().subscribe((res: any) => {
      this.gifList = res.data.map((element: any) => {
        return element.images.downsized.url;
      });
      console.log(this.gifList);
    });
  }

  searchGif() {
    this._gifService.searchGifByTitle(this.searchtext).subscribe((res: any) => {
      this.gifList = res.data.map((element: any) => {
        return element.images.downsized.url;
      });
    });
  }
}
