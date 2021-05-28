import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
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

  emitAppareilSubject()  {
    this.appareilsSubject.next(this.appareils.slice())
  }

  getAppareilbyId(id: number) {
    const appareil = this.appareils.find((s) => {return s.id == id;});
    return appareil
  }

  switch(id: number) {
    this.appareils.find((s) => {return s.id == id;})!.status = !this.appareils.find((s) => {return s.id == id;})!.status ;
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
