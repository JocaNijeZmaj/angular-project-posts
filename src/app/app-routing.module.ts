import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';

const routes: Routes = [
  { path: "", redirectTo: '/posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponentComponent},
  { path: '**', component: PageNotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
