import { RelativeTime } from './dates';

export class Post {
  age: RelativeTime = { value: '', unit: '' };
  author: string = '';
  commentsCount: number = 0;
  thumbnailUrl: string = '';
  title: string = '';
  unread?: boolean = true;

  constructor(params?: Post) {
    if (params) Object.assign(this, params);
  }
}
