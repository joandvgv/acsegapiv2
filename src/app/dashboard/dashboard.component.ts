import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
 import { MaterializeAction } from 'angular2-materialize';

import { FEED_ADD, FEED_REMOVE, FEED_ADD_COMMENT } from '../store/feed/feed.actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  form: FormGroup;

  feeds$: Observable<{}>;
   modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {

    this.feeds$ = store.select('feed');

    this.form = fb.group({
      text: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  submitFeed(): void {

    if (this.form.valid) {

      this.store.dispatch({
        type: FEED_ADD,
        payload: this.form.value
      });

      this.form.reset();
    }
  }

  submitCommentOnFeed(id: string, commentForm: FormGroup): void {

    if (commentForm.valid) {

      this.store.dispatch({
        type: FEED_ADD_COMMENT,
        payload: {
          id,
          comment: commentForm.value
        }
      });

      commentForm.reset();
    }

  }

  removeFeed(feed: {}): void {

    this.store.dispatch({
      type: FEED_REMOVE,
      payload: feed
    });

  }
}
