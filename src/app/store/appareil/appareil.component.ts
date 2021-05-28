import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  createdAt: Date;
  appareilSubscription: any;

  @Input()
  appareilName: string = "";

  @Input()
  appareilStatus: boolean = false;

  @Input() id: number = 0;


  constructor(private appareilService: AppareilService) {
    this.createdAt = new Date()
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (a: any[]) => {
        this.appareilStatus = a.find((s) => {return s.id == this.id;}).status;
      }
    )
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  switch() {
    this.appareilService.switch(this.id);
    this.appareilService.emitAppareilSubject();
  }

  getReadableStatus() {
    if (this.appareilStatus) {return "Allumé"}
    else {return "éteint"}
  }

  color() {
    this.appareilService.emitAppareilSubject();
    if (this.appareilStatus) {return "orange"}
    else {return "black"}
  }


}
