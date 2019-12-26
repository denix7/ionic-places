import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../places/places.service';
import { Place } from '../models/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place;

  constructor(private activatedRoute:ActivatedRoute, private placesService:PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let id = paramMap.get('placeId');
      console.warn(id);
      this.place = this.placesService.getPlace(id);
      console.warn(this.place);
    })
  }

  deletePlace()
  {
    this.placesService.deletePlace(this.place.id);
    // console.log(this.placesService.getPlaces());
  }
}
