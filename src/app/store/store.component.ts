import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  appareils!: any[];
  appareilSubscription: any;

  constructor(private appareilService: AppareilService) {
   }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (a: any[]) => {
        this.appareils = a;
      }
    )
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }


  switchOnAll() {
    this.appareilService.switchOnAll();
    this.appareilService.emitAppareilSubject();
  }

  switchOffAll() {
    this.appareilService.switchOffAll();
    this.appareilService.emitAppareilSubject();
  }

}
