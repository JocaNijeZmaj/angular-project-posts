import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { IPost } from './posts';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public newPostSubject = new Subject<any>()

  constructor( private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }
  
  addPost(data:any) {
    this.newPostSubject.next(data);

  }

}
