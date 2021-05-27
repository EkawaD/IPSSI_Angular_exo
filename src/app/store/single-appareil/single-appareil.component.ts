import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  route: ActivatedRoute;
  name: string = "";
  status: boolean = false;

  constructor(private r: ActivatedRoute, private appareilService: AppareilService) {  this.route = r; }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilbyId(+id)?.name!;
    this.status = this.appareilService.getAppareilbyId(+id)?.status!;
  }

  getReadableStatus() {
    if (this.status) {return "Allumé"}
    else {return "éteint"}
  }
}
