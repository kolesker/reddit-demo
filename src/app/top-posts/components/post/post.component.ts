import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from 'src/app/core/models';


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() public post: Post = new Post();
  @Output() public dismiss: EventEmitter<undefined> = new EventEmitter();

  constructor() { }

  public onDismissClick(evt: Event): void {
    evt.stopPropagation();
    this.dismiss.emit();
  }
}
