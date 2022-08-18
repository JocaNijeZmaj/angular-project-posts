import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponentComponent,
    PageNotFoundErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
