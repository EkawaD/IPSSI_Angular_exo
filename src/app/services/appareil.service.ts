import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      on: false
    },
    {
      id: 2,
      name: 'Frigo',
      on: true
    },
    {
      id: 3,
      name: 'Ordinateur',
      on: false
    }
  ]

  constructor() {}

  switchOnAll(){
    this.appareils.map( a => {
      a.on = true
    })
  }

  switchOffAll(){
    confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')
    this.appareils.map( a => {
      a.on = false
    })
  }

}
