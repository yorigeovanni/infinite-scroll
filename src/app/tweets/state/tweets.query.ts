import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TweetsStore, TweetsState } from './tweets.store';
import { Tweet } from './tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsQuery extends QueryEntity<TweetsState, Tweet> {

  constructor(protected store: TweetsStore) {
    super(store);
  }

  getHasMore() {
    return this.getSnapshot().hasMore;
  }

  getPage() {
    return this.getSnapshot().page;
  }

}
