import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeConverter } from '../models';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }

  public getTopPosts(limit?: number): Observable<any> {
    return this.apiService.getTopPosts(limit).pipe(
      map(response => response.data.children.map(({ data }) => TypeConverter.ApiPostToPost(data)))
    );
  }
}
