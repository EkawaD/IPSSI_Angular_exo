import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      status: "éteint"
    },
    {
      id: 2,
      name: 'Frigo',
      status: "allumé"
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: "éteint"
    }
  ]

  constructor() {}

  switchOnAll(){
    this.appareils.map( a => {
      a.status = "allumé"
    })
  }

  switchOffAll(){
    confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')
    this.appareils.map( a => {
      a.status = "éteint"
    })
  }

}
