import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private redditApiUrl = environment.redditApiUrl;

  constructor(private http: HttpClient) { }

  public getTopPosts(limit?: number): Observable<any> {
    return this.http.get(`${this.redditApiUrl}/top.json${limit ? `?limit=${limit}` : ''}`);
  }
}
