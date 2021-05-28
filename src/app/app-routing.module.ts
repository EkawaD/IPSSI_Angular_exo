import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AuthComponent } from './auth/auth.component'
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {path: 'store', canActivate: [AuthGuardService], loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  {path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
