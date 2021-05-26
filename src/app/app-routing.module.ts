import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'
import { BlogComponent } from './component/blog/blog.component';
import { AppareilViewComponent } from './component/store/appareil-view/appareil-view.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'appareil', component: AppareilViewComponent},
  {path: '**', component: HomeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
