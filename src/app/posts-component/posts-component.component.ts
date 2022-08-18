import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.scss']
})
export class PostsComponentComponent implements OnInit {

  public posts: any = [];  
  constructor(private _postService: PostsService) { }
  
  ngOnInit() {
    this._postService.getPosts()
        .subscribe(data => this.posts = data);

    this._postService.newPostSubject.subscribe(data => this.posts.unshift(data))
  }

}
