import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { TopPostsModule } from '../top-posts/top-posts.module';


@NgModule({
  imports: [
    RouterModule,
    TopPostsModule,
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
