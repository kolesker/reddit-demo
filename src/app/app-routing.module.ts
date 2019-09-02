import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopPostsComponent } from './top-posts/components/top-posts/top-posts.component';


const routes: Routes = [
  { path: '', component: TopPostsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
