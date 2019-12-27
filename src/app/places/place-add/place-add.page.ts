import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {
  name:string;
  country:string;
  city:string;
  year:string;
  url:string;

  constructor(private placesService:PlacesService, private router:Router) { }

  ngOnInit() {
  }

  savePlace()
  {
    this.placesService.addPlace(this.name, this.country, this.city, this.year, this.url);
    this.router.navigate(['/places']);
  }
}
