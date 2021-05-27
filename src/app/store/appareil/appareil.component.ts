import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  createdAt: Date;

  @Input()
  appareilName!: string;

  @Input()
  appareilStatus!: boolean;


  constructor() {
    this.createdAt = new Date()

  }

  ngOnInit(): void {
  }


  getReadableStatus() {
    if (this.appareilStatus) {return "Allumé"}
    else {return "éteint"}
  }

  color() {
    if (this.appareilStatus) {return "orange"}
    else {return "black"}
  }


}
