import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit {

  @ViewChild('newPostForm') newPostForm: any;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
  }

    onPostSubmit(data:string) {
      this.postService.addPost(data);
      this.newPostForm.reset();
    }
}
