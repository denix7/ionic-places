import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places : Place[] = [
    {
      id: "1",
      name: "Eifel tower",
      country: "Francia",
      city: "Paris",
      year: '1889',
      imgURL: "https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2018/05/eiffel-tower-3349075_1280-1.jpg",
      comments: ['awesome place', 'incredible!']
    },
    {
      id: "2",
      name: "Chichen Itza",
      country: "Mexico",
      city: "yucatan",
      year: '1546',
      imgURL: "https://cdn.getyourguide.com/img/tour_img-1191926-145.jpg",
      comments: ['wonderfull pic!', 'lol', 'amazing!!!']
    },
    {
      id: "3",
      name: "Chichen Itza",
      country: "Mexico",
      city: "yucatan",
      year: '1546',
      imgURL: "https://cdn.getyourguide.com/img/tour_img-1191926-145.jpg",
      comments: []
    }
  ]

  constructor() { }

  getPlaces()
  {
    return [...this.places]; //ES6 crea copia 
  }

  getPlace(placeId: string)
  {
    return {
      ...this.places.find(place => {
        console.warn(place)
        return place.id === placeId;
      })
    }
  }

  addPlace(name:string, country:string, city:string, year:string, imgURL:string, )
  {
    this.places.push({
      id:this.places.length+1 + "",
      name,
      country,
      city,
      year,
      imgURL,
      comments:[]
    });
  }

  deletePlace(placeId:string)
  {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    })
  }


  editPlace()
  {

  }
}
