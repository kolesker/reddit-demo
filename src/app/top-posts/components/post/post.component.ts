import { Component, Input, Output, EventEmitter } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

import { Post } from 'src/app/core/models';


@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('clicked', [
      transition('* => clicked', [
        animate('150ms ease-in', style({ backgroundColor: '#a0a0a0' }))
      ]),
      transition('clicked => *', [
        animate('150ms ease-out', style({ backgroundColor: 'black' }))
      ])
    ])
  ]
})
export class PostComponent {

  @Input() public post: Post = new Post();
  @Output() public dismiss: EventEmitter<undefined> = new EventEmitter();

  public clicked: boolean = false;

  constructor() { }

  public onDismissClick(evt: Event): void {
    evt.stopPropagation();
    this.dismiss.emit();
  }
}
