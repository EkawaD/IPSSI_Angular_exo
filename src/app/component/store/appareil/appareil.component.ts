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
  appareilStatus!: string;

  checked!: boolean;


  constructor() {
    this.createdAt = new Date()

  }

  ngOnInit(): void {
    this.checked = this.getStatus()
  }

  getStatus() {
    if (this.appareilStatus == "éteint") {return false}
    else if (this.appareilStatus == "allumé") {return true}
    else {return true}
  }

  color() {
    if (this.getStatus()) {return "orange"}
    else {return "black"}
  }

  switchStatus(){
    if (this.getStatus()) {this.appareilStatus = "éteint"}
    else {this.appareilStatus = "allumé"}
  }

}
