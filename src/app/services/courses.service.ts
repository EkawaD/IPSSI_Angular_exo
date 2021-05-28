import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = this.getCourses();

  constructor() { }

  getCourses() {
    return [
      {titre: "Angular", nb_etud: 6},
      {titre: "TS", nb_etud: 9},
      {titre: "Firebase", nb_etud: 3},
    ]
  }

  updateNb_etud(titre: string, new_nb: number){
    this.courses.find(((s) => {return s.titre == titre}))!.nb_etud = new_nb
  }
}
