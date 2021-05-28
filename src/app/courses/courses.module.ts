import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursComponent } from './cours/cours.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    CoursesComponent,
    CoursComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    FormsModule
  ]
})
export class CoursesModule { }
