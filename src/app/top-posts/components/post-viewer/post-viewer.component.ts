import { Component, Input } from '@angular/core';

import { Post } from 'src/app/core/models';


@Component({
  selector: 'app-post-viewer',
  templateUrl: 'post-viewer.component.html',
})
export class PostViewerComponent {

  @Input() public post: Post;

  constructor() { }
}
