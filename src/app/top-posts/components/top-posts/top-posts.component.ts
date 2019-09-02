import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromTopPosts from '../../store/reducers';
import { loadPosts } from '../../store/actions';
import { Post } from 'src/app/core/models';


@Component({
  selector: 'app-top-posts',
  templateUrl: 'top-posts.component.html',
  styleUrls: ['./top-posts.component.scss']
})
export class TopPostsComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private store: Store<fromTopPosts.State>) {
    this.posts$ = this.store.pipe(select(fromTopPosts.getTopPosts));
  }

  public ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
