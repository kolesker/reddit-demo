import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as TopPostsActions from './actions';
import { PostService } from 'src/app/core/services/post.service';


@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(TopPostsActions.loadPosts),
    mergeMap(() => this.postService.getTopPosts(this.postsAmount).pipe(
      map(posts => TopPostsActions.loadPostsSuccess({ payload: posts })),
      catchError(() => of(TopPostsActions.loadPostsError))
    ))
  ));

  private readonly postsAmount = 50;

  constructor(private actions$: Actions, private postService: PostService) {}
}
