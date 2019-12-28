import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private _http:HttpClient) { }

  getPosts()
  {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/posts?_limit=20');
  }
}
