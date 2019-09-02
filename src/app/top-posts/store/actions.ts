import { createAction } from '@ngrx/store';

export const loadPosts = createAction('[Top Posts] Load Posts');
export const loadPostsSuccess = createAction('[Top Posts] Load Posts Success');
export const loadPostsError = createAction('[Top Posts] Load Posts Error');
