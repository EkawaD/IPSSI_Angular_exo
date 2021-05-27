import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
