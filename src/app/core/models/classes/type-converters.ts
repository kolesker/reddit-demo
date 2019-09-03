import { Post } from './post';
import { RelativeTime } from './dates';

export class TypeConverter {

  static apiPostToPost(apiPost: any): Post {
    return new Post({
      age: TypeConverter.utcDateToRelativeTime(apiPost.created_utc * 1000),
      author: apiPost.author,
      commentsCount: apiPost.num_comments,
      thumbnailUrl: apiPost.thumbnail,
      title: apiPost.title,
    });
  }

  static utcDateToRelativeTime(utcDate: number): RelativeTime {
    let relativeTime: RelativeTime;
    let timeVal: number;
    const diffTime = new Date().getTime() - new Date(utcDate).getTime();
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;
    const getSIFNeeded = () => timeVal > 1 ? 's' : '';

    if (diffTime < minute)
      relativeTime = { value: '', unit: 'just now' };
    else if (diffTime < hour)
      relativeTime = { value: String(Math.floor(timeVal = diffTime / minute)), unit: `minute${getSIFNeeded()} ago` };
     else if (diffTime < day)
      relativeTime = { value: String(Math.floor(timeVal = diffTime / hour)), unit: `hour${getSIFNeeded()} ago` };
    else if (diffTime < month)
      relativeTime = { value: String(Math.floor(timeVal = diffTime / day)), unit: `day${getSIFNeeded()} ago` };
    else if (diffTime < year)
      relativeTime = { value: String(Math.floor(timeVal = diffTime / month)), unit: `month${getSIFNeeded()} ago` };
    else
      relativeTime = { value: String(Math.floor(timeVal = diffTime / year)), unit: `year${getSIFNeeded()} ago` };

    return relativeTime;
  }

  constructor() { }
}
