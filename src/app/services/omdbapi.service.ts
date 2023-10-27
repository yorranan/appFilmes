import { HttpClient } from '@angular/common/http';
import { Injectable, getNgModuleById } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
  game = 'game'
}

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {
  url = 'http://www.omdbapi.com/'
  key = environment.apiKey;
  
  constructor(private http: HttpClient) {}

  getAll(title: string, type: SearchType)
  : Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.key}`)
  }

  geById(id: any){
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.key}`)
  }
}
