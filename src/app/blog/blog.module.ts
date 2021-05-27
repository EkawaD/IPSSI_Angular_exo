import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BlogModule { }
