import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { TopPostsComponent } from './components/top-posts/top-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostViewerComponent } from './components/post-viewer/post-viewer.component';
import * as fromTopPosts from './store/reducers';



@NgModule({
  imports: [
    StoreModule.forFeature(fromTopPosts.featureKey, fromTopPosts.reducer),
  ],
  declarations: [
    PostComponent,
    PostViewerComponent,
    TopPostsComponent,
  ],
})
export class TopPostsModule {
  constructor() {}
}
