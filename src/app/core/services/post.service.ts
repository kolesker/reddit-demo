import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }

  public getTopPosts(limit?: number): Observable<any> {
    return this.apiService.getTopPosts(limit);
  }
}
