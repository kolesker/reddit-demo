import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as TopPostsActions from './actions';
import { Post } from 'src/app/core/models';

export interface State {
  posts: Post[];
  previewPost: { post: Post; index: number; };
  isSidebarShowed: boolean;
}

export const initialState: State = {
  posts: [],
  previewPost: undefined,
  isSidebarShowed: true,
};

const _reducer = createReducer(
  initialState,
  on(TopPostsActions.loadPostsSuccess, (state, { payload }) => ({ ...state, posts: payload })),
  on(TopPostsActions.dismissPost, (state, { index }) => {
    state.posts.splice(index, 1);
    return { ...state, posts: [...state.posts] };
  }),
  on(TopPostsActions.clearAllPosts, state => ({ ...initialState })),
  on(TopPostsActions.previewPost, (state, { index }) => {
    if (state.posts[index].unread) state.posts[index] = new Post({...state.posts[index], unread: false });
    return { ...state, posts: [...state.posts], previewPost: { post: state.posts[index], index } };
  }),
  on(TopPostsActions.showSidebar, (state, { show }) => ({ ...state, isSidebarShowed: show })),
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

export const getPreviewPost = createSelector(
  _getTopPosts,
  (state: State) => state.previewPost ? state.previewPost.post : undefined
);

export const isSidebarShowed = createSelector(
  _getTopPosts,
  (state: State) => state.isSidebarShowed
);
