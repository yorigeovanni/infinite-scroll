import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Tweet } from './tweet.model';

export interface TweetsState extends EntityState<Tweet> {
  hasMore: boolean;
  page: number;
}

const initialState: TweetsState = {
  hasMore: true,
  page: 1
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tweets' })
export class TweetsStore extends EntityStore<TweetsState, Tweet> {

  constructor() {
    super(initialState);
  }

  updatePage(page: { hasMore: boolean, page: number }) {
    this.updateRoot(page);
  }

}

