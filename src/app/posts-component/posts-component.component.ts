import { Component, OnInit } from '@angular/core';
import { IPost } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.scss']
})
export class PostsComponentComponent implements OnInit {

  public posts: IPost[] = [];  
  constructor(private _postService: PostsService) { }
  
  ngOnInit() {
    this._postService.getPosts()
        .subscribe(data => this.posts = data);

    this._postService.newPostSubject.subscribe(data => this.posts.unshift(data))
  }

}
