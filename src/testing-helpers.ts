/* tslint:disable:component-selector*/
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';


/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const buttonClickEvents = {
  left:  { button: 0 },
  right: { button: 2 }
};

export class TestingHelper {

  static getElementByCss(debugEl: DebugElement, selector: string): any {
    const element = debugEl.query(By.css(selector));
    return element ? element.nativeElement : element;
  }

  /** Simulate element click. Defaults to mouse left-button click event. */
  static click(el: DebugElement | HTMLElement, eventObj: any = buttonClickEvents.left): void {
    if (el instanceof HTMLElement) el.click();
    else el.triggerEventHandler('click', eventObj);
  }
}

@Component({ selector: 'app-base-layout', template: '' })
export class BaseLayoutStubComponent { }

@Component({ selector: 'router-outlet', template: '' })
export class RouterOutletStubComponent { }
