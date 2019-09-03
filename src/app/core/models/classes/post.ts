export class Post {
  age: string = '';
  author: string = '';
  commentsCount: number = 0;
  thumbnailUrl: string = '';
  title: string = '';
  unread?: boolean = true;

  constructor(params?: Post) {
    if (params) Object.assign(this, params);
  }
}
