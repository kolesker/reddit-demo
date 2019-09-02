import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { TopPostsModule } from '../top-posts/top-posts.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  imports: [
    EffectsModule.forRoot([]),
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({}),
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
