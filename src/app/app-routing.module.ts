import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'places', loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)},
  {
    path: 'places',
    children: [
      {
        path: "",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      },
    ],
    
  },
  {
    path: 'new-place',
    loadChildren: () => import('./places/place-add/place-add.module').then( m=> m.PlaceAddPageModule)
  },
  { path: '**', redirectTo: 'places', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
