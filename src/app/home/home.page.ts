import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../services/fake-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  posts = [];
  constructor(private _fakeApi:FakeApiService) {}

  ngOnInit()
  {
    this._fakeApi.getPosts()
      .subscribe((data) => {
        this.posts = data;
        console.warn(this.posts);
      });
  }
}
