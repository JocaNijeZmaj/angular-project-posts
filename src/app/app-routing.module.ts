import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPostComponent } from './comment-post/comment-post.component';
import { CommentsComponent } from './comments-component/comments.component';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';

const routes: Routes = [
  { path: "", redirectTo: '/posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponentComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'comments/post/:postId', component: CommentPostComponent},
  { path: '**', component: PageNotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
