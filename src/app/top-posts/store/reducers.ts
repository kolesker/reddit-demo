import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as TopPostsActions from './actions';
import { Post } from 'src/app/core/models';

export interface State {
  posts: Post[];
}

export const initialState: State = {
  posts: [],
};

const _reducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}

export const featureKey = 'topPosts';

/* Selectors */
const _getTopPosts = createFeatureSelector<any, State>(featureKey);

export const getTopPosts = createSelector(
  _getTopPosts,
  (state: State) => state.posts
);
