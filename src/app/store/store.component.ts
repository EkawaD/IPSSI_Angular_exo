import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  appareils!: any[];

  constructor(private appareilService: AppareilService) {
   }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils

  }

  switchOnAll() {
    this.appareilService.switchOnAll()
  }

  switchOffAll() {
    this.appareilService.switchOffAll()
  }

}
