import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPost, IComment } from './posts';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public newPostSubject = new Subject<IPost>()
  public newCommentSubject = new Subject<IComment>()

  constructor( private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }
  
  addPost(data: IPost) {
    this.newPostSubject.next(data);
  }
  
  AddComment(data: IComment) {
    this.newCommentSubject.next(data);
  }
}
