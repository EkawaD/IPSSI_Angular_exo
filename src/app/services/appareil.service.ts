import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      status: false
    },
    {
      id: 2,
      name: 'Frigo',
      status: true
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: false
    }
  ]

  constructor() {}

  getAppareilbyId(id: number) {
    const appareil = this.appareils.find((s) => {return s.id == id;});
    return appareil
  }

  switchOnAll(){
    this.appareils.map( a => {
      a.status = true
    })
  }

  switchOffAll(){
    confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')
    this.appareils.map( a => {
      a.status = false
    })
  }

}
