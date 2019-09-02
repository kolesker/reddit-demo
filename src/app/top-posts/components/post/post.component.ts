import { Component, Input } from '@angular/core';

import { Post } from 'src/app/core/models';


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  @Input() public post: Post = new Post();

  constructor() { }
}
