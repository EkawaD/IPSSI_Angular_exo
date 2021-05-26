import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.post.loveIts += 1
  }

  onDislike() {
    this.post.loveIts -= 1
  }

  color(){
    if (this.post.loveIts > 0) { return 'green' }
    else if (this.post.loveIts < 0) { return 'red' }
    else { return 'black' }
  }

}
