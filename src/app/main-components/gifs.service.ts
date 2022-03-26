import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  getGifList(pageNo: number) {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY'}&limit=${10}&offset=${pageNo}`
    );
  }

  searchGifByTitle(query: string, pageNo: number) {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY'}&q=${query}&limit=${10}&offset=${pageNo}`
    );
  }
}
