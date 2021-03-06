import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '五十川 洋平');
const ANOTHER_USER: User = new User(2, '竹井 賢治');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER,'Hello World!' ),
  new Comment(ANOTHER_USER,'Thank you.' ),
  new Comment(CURRENT_USER,'What are you doing?'),
  new Comment(CURRENT_USER,'Did you get a message from him?')
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // comments = COMMENTS;
  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  comment = "";
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.item$ = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.valueChanges();
  }

  addComment(comment: string): void {
    if (comment) {
      this.commentsRef.push(new Comment(this.currentUser, comment));
      this.comment = '';
    }
  }
}
