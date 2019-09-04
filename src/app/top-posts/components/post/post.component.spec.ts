import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Post } from 'src/app/core/models';
import { TestingHelper } from 'src/testing-helpers';
import { PostComponent } from './post.component';


describe('PostComponent', () => {
  let component: PostComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<PostComponent>;

  const mockPost = new Post({
    age: { value: '10', unit: 'minutes' },
    author: 'Mark',
    commentsCount: 555,
    id: '43432a',
    thumbnailUrl: 'A_url',
    title: 'A title',
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('#post should be defined on init', () => {
    expect(component.post).toBeDefined();
  });

  it('should display #post.author', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post__author');
    expect(elem.textContent).toContain(mockPost.author);
  });

  it('should display #post.title', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post__title');
    expect(elem.textContent).toContain(mockPost.title);
  });

  it('should display post image', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLImageElement = TestingHelper.getElementByCss(componentDe, '.post__thumbnail');
    expect(elem.src).toContain(mockPost.thumbnailUrl);
  });

  it('should set <img> alt attribute with #post.title', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLImageElement = TestingHelper.getElementByCss(componentDe, '.post__thumbnail');
    expect(elem.alt).toContain(mockPost.title);
  });

  it('should display #post.age', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post__age');
    expect(elem.textContent).toContain(`${mockPost.age.value} ${mockPost.age.unit}`);
  });

  it('should display #post comments', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post__comments-count');
    expect(elem.textContent).toContain(`${mockPost.commentsCount} comments`);
  });

  it('should raise dismiss event when clicking in "Dismiss Post"', () => {
    let emitted = false;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post__dismiss');
    component.dismiss.subscribe(() => emitted = true);
    elem.click();
    expect(emitted).toBeTruthy();
  });

  it('should hide unread indicator if #post.unread is false', () => {
    component.post = mockPost as Post;
    fixture.detectChanges();
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.post__unread-mark');
    expect(elem.className).not.toContain('post__unread-mark_visibility-hidden');

    component.post.unread = false;
    fixture.detectChanges();
    expect(elem.className).toContain('post__unread-mark_visibility-hidden');
  });
});
