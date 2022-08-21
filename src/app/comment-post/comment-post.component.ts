import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../posts';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss']
})
export class CommentPostComponent implements OnInit {

  public commentId: any;
  public comments!: IComment[];
  @ViewChild('newCommentForm') newCommentForm!: NgForm;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private _postService: PostsService) {
  }
  
  ngOnInit(): void {
    
    let postId = this.route.snapshot.paramMap.get('postId');
    this.commentId= postId;

    this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
            .subscribe((data) => this.comments = data.filter((e) => e.postId == this.commentId));

    this._postService.newCommentSubject.subscribe(data => this.comments.push(data))
  }
  
  onCommentSubmit(data: IComment) {
    this._postService.AddComment(data);
    this.newCommentForm.resetForm();
  }

}
