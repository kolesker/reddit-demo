import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/core/models';

export const loadPosts = createAction('[Top Posts] Load Posts');
export const loadPostsSuccess = createAction('[Top Posts] Load Posts Success', props<{ payload: Post[] }>());
export const loadPostsError = createAction('[Top Posts] Load Posts Error');
export const dismissPost = createAction('[Top Posts] Dismiss Post', props<{ index: number; }>());
export const clearAllPosts = createAction('[Top Posts] Clear All Posts');
export const previewPost = createAction('[Top Posts] Preview Post', props<{ index: number; }>());
