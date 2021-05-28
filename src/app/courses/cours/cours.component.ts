import { Component, Input, OnInit, Output } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  @Input()
  contenu: any;

  constructor(private coursService: CoursesService) { }

  ngOnInit(): void {
  }

  updateNb() {
    this.coursService.updateNb_etud(this.contenu.titre, +this.contenu.nb_etud)
  }

}
