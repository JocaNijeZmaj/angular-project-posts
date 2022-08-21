import { Component, OnInit } from '@angular/core';
import { IPost } from '../posts'
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styles: [`
     h1 {
        background-color: #aaaa;
     }
     ul {
        border: 1px black solid;
        margin: 5px;
        padding: 1rem;
     }
     li {
        list-style: none;
     }
     
     
     `],
    })

export class CommentsComponent implements OnInit {

  public posts: IPost[] = [];    

  constructor(
   private _postService: PostsService,
   private router: Router) {
   }

  ngOnInit(): void {
   
   this._postService.getPosts()
        .subscribe(data => this.posts = data);
  }
  onClick(post:any) {
   this.router.navigate(['/comments/post', post.id])
  }
}