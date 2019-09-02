import { Action, createReducer, on } from '@ngrx/store';
import * as TopPostsActions from './actions';
import { Post } from 'src/app/core/models';

export interface State {
  topPosts: Post[];
}

export const initialState: State = {
  topPosts: [],
};

const _reducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}

export const featureKey = 'topPosts';
