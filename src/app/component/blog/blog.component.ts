import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/component/blog/model/post'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts = [new Post("Bonjour", "Hello world !"), new Post("Hello", "Bonjour le monde !")]

  constructor() { }

  ngOnInit(): void {
  }

}
