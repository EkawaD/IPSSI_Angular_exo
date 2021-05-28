import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Cours } from './model/cours';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Cours[] = [];
  nb_etuds: number = 0;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.getNbEtuds();
  }

  getNbEtuds() {
    return this.courses.reduce((a,b) => a + Number(b.nb_etud), 0)
  }
}
