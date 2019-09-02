import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { TopPostsComponent } from '../top-posts/components/top-posts/top-posts.component';


@NgModule({
  imports: [
    TopPostsComponent,
  ],
  declarations: [
    BaseLayoutComponent,
  ],
  exports: [ BaseLayoutComponent ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule)
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  }
}
