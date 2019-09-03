import { Post } from './post';

export class TypeConverter {

  static ApiPostToPost(apiPost: any): Post {
    return new Post({
      age: apiPost.created_utc,
      author: apiPost.author,
      commentsCount: apiPost.num_comments,
      thumbnailUrl: apiPost.thumbnail,
      title: apiPost.title,
    });
  }

  constructor() { }
}
