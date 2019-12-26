import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places/places.service';
import { Place } from '../models/place.model';

import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place;

  constructor(private activatedRoute:ActivatedRoute, private placesService:PlacesService,
              private router:Router, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let id = paramMap.get('placeId');
      console.warn(id);
      this.place = this.placesService.getPlace(id);
      console.warn(this.place);
    })
  }

  async deletePlace()
  {
    //crea el alert
    const alertElement = await this.alertCtrl.create({
      header: 'Seguro que desea eliminar el lugar?',
      message: 'Esta opcion no tiene retorno',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    }); 
    //muestra el alert
    await alertElement.present();
  }
}
