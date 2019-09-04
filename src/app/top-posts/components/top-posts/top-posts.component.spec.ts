import { DebugElement, Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { TestingHelper } from 'src/testing-helpers';
import { TopPostsComponent } from './top-posts.component';
import * as fromTopPosts from '../../store/reducers';
import { Post } from 'src/app/core/models';
import * as TopPostsActions from '../../store/actions';


describe('TopPostsComponent', () => {
  let component: TopPostsComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<TopPostsComponent>;

  let store: MockStore<fromTopPosts.State>;
  const initialState = { [fromTopPosts.featureKey]: fromTopPosts.initialState };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ PostStubComponent, PostViewerStubComponent, TopPostsComponent ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPostsComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
    store = TestBed.get<Store<fromTopPosts.State>>(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should dispatch loadPosts action onInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(TopPostsActions.loadPosts());
  });

  it('should dispatch clearAllPosts action when clicked in "Dismiss All"', () => {
    spyOn(store, 'dispatch');
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.posts-list__dismiss-all');
    elem.click();
    expect(store.dispatch).toHaveBeenCalledWith(TopPostsActions.clearAllPosts());
  });

  it('should dispatch dismissPost action when #onDismissPost() is called', () => {
    spyOn(store, 'dispatch');
    const index = 0;
    component.onDismissPost(index);
    expect(store.dispatch).toHaveBeenCalledWith(TopPostsActions.dismissPost({ index }));
  });
});


@Component({ selector: 'app-post', template: '' })
class PostStubComponent { @Input() post: Post; }

@Component({ selector: 'app-post-viewer', template: '' })
class PostViewerStubComponent { @Input() post: Post; }
