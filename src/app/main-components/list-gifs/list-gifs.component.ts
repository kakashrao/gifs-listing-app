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
  pageNo: number = 0;
  currentPage: number = 1;
  loader: boolean = false;

  constructor(private _gifService: GifsService) {}

  ngOnInit(): void {
    this.getGifLists();
  }

  getGifLists() {
    this.loader = true;
    this._gifService.getGifList(this.pageNo).subscribe(
      (res: any) => {
        this.gifList = res.data.map((element: any) => {
          return element.images.downsized.url;
        });
        this.loader = false;
        if (this.gifList.length === 0) {
          alert('No more data found, taking you to the previous page');
          this.pageNo = this.pageNo - 10;
          this.currentPage--;
          this.getGifLists();
        }
        //console.log(this.gifList);
      },
      (err) => {
        this.loader = false;
        alert(err.error.message);
      }
    );
  }

  searchGif() {
    this.loader = true;
    if (this.searchtext) {
      this._gifService.searchGifByTitle(this.searchtext, this.pageNo).subscribe(
        (res: any) => {
          this.gifList = res.data.map((element: any) => {
            return element.images.downsized.url;
          });
          this.loader = false;
          if (this.gifList.length === 0) {
            alert('No more data found, taking you to the previous page');
            this.pageNo = this.pageNo - 10;
            this.currentPage--;
            this.searchGif();
          }
        },
        (err) => {
          this.loader = false;
          alert(err.error.message);
        }
      );
    } else {
      this.pageNo = 0;
      this.getGifLists();
    }
  }

  goPrev() {
    if (this.pageNo > 0) {
      this.pageNo = this.pageNo - 10;
    }

    if (this.currentPage > 1) {
      this.currentPage--;
    }

    if (this.currentPage > 1) {
      if (this.searchtext) {
        this.searchGif();
      } else {
        this.getGifLists();
      }
    }
  }

  goNext() {
    this.pageNo = this.pageNo + 10;
    this.currentPage++;
    if (this.searchtext) {
      this.searchGif();
    } else {
      this.getGifLists();
    }
  }

  closeSearch() {
    this.pageNo = 0;
    this.currentPage = 1;
    this.getGifLists();
  }
}
