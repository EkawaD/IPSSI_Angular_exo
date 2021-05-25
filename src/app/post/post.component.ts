import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title: String;
  content: String;
  loveIts: number;
  createdAt?: Date;

  constructor(title: String, content: String) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.createdAt = new Date();
  }

  ngOnInit(): void {
  }

}
