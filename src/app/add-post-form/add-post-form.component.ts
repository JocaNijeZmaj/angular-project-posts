import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPost } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit {

  @ViewChild('newPostForm') newPostForm!: NgForm;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
  }

    onPostSubmit(data: IPost) {
      this.postService.addPost(data);
      this.newPostForm.reset();
    }
}
