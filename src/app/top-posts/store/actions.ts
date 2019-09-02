import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Top Posts] Load Posts');
export const loadPostsSuccess = createAction('[Top Posts] Load Posts Success', props<{ payload: any }>());
export const loadPostsError = createAction('[Top Posts] Load Posts Error');
