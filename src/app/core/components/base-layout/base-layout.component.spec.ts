import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutComponent } from './base-layout.component';
import { TestingHelper, RouterOutletStubComponent } from 'src/testing-helpers';


describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseLayoutComponent, RouterOutletStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have a .base-layout__content element', () => {
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, '.base-layout__content');
    expect(elem).toBeTruthy();
  });

  it('should have the <router-outlet> element', () => {
    const elem: HTMLElement = TestingHelper.getElementByCss(componentDe, 'router-outlet');
    expect(elem).toBeTruthy();
  });
});

