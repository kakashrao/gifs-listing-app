import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  getGifList(pageNo: number) {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${'O4KQmzcKAiT0U8qGnpsHmQ0wX1QtKaN5'}&limit=${10}&offset=${pageNo}`
    );
  }

  searchGifByTitle(query: string, pageNo: number) {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${'O4KQmzcKAiT0U8qGnpsHmQ0wX1QtKaN5'}&q=${query}&limit=${10}`
    );
  }
}
