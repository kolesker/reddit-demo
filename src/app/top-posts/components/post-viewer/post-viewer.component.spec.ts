import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewerComponent } from './post-viewer.component';
import { Post } from 'src/app/core/models';
import { TestingHelper } from 'src/testing-helpers';

describe('PostViewerComponent', () => {
  let component: PostViewerComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<PostViewerComponent>;

  const mockPost = { author: 'Mark', thumbnailUrl: 'A_url', title: 'A title' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewerComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('#post should be undefined on init', () => {
    expect(component.post).not.toBeDefined();
  });

  it('should display post author', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, 'h5');
    expect(elem.textContent).toContain(mockPost.author);
  });

  it('should display post title', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post-viewer > div:last-child');
    expect(elem.textContent).toContain(mockPost.title);
  });

  it('should display post image', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLImageElement = TestingHelper.getElementByCss(componentDe, 'img');
    expect(elem.src).toContain(mockPost.thumbnailUrl);
  });

  it('should set <img> alt attribute with #post.title', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLImageElement = TestingHelper.getElementByCss(componentDe, 'img');
    expect(elem.alt).toContain(mockPost.title);
  });
});
