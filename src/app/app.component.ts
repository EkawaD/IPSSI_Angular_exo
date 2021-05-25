import { Component } from '@angular/core';
import { PostComponent } from '../app/post/post.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ipssi';
  posts = [new PostComponent("Bonjour", "Hello world !"), new PostComponent("Hello", "Bonjour le monde !")]

  onLike(post: PostComponent) {
    post.loveIts += 1
  }

  onDislike(post: PostComponent) {
    post.loveIts -= 1
  }
}

