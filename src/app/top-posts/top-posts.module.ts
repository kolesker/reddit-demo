import { NgModule } from '@angular/core';

import { TopPostsComponent } from './components/top-posts/top-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostViewerComponent } from './components/post-viewer/post-viewer.component';


@NgModule({
  imports: [],
  declarations: [
    PostComponent,
    PostViewerComponent,
    TopPostsComponent,
  ],
})
export class TopPostsModule {
  constructor() {}
}
