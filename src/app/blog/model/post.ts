export class Post {

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

}

