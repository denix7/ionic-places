import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [
    {
      id: 1,
      name: "Eifel tower",
      country: "Francia",
      city: "Paris",
      year: 1889,
      imgURL: "https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2018/05/eiffel-tower-3349075_1280-1.jpg"
    },
    {
      id: 2,
      name: "Chichen Itza",
      country: "Mexico",
      city: "yucatan",
      year: 1546,
      imgURL: "https://cdn.getyourguide.com/img/tour_img-1191926-145.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
