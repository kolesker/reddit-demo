import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, from } from 'rxjs';

import * as fromTopPosts from '../../store/reducers';
import * as TopPostsActions from '../../store/actions';
import { Post } from 'src/app/core/models';


@Component({
  selector: 'app-top-posts',
  templateUrl: 'top-posts.component.html',
  styleUrls: ['./top-posts.component.scss']
})
export class TopPostsComponent implements OnInit {

  public posts$: Observable<Post[]>;
  public previewPost$: Observable<Post>;

  constructor(private store: Store<fromTopPosts.State>) {
    this.posts$ = this.store.pipe(select(fromTopPosts.getTopPosts));
    this.previewPost$ = this.store.pipe(select(fromTopPosts.getPreviewPost));
  }

  public ngOnInit(): void {
    this.store.dispatch(TopPostsActions.loadPosts());
  }

  public onDismissAllClick(): void {
    this.store.dispatch(TopPostsActions.clearAllPosts());
  }

  public onDismissPost(index: number): void {
    this.store.dispatch(TopPostsActions.dismissPost({ index }));
  }

  public onPostClick(index: number): void {
    this.store.dispatch(TopPostsActions.previewPost({ index }));
  }
}
