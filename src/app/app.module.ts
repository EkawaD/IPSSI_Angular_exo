import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import { PostListComponent } from './component/blog/post-list/post-list.component';
import { PostComponent } from './component/blog/post/post.component';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppareilComponent } from './component/store/appareil/appareil.component';
import { AppareilViewComponent } from './component/store/appareil-view/appareil-view.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    BlogComponent,
    HomeComponent,
    AppareilComponent,
    AppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
