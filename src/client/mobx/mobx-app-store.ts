import {action, observable} from 'mobx';
import {IUser} from '../../shared/user';
import {IFollower} from '../../shared/follower';
import {fetchFollowers} from '../utils/api-facade';

export class MobxAppStore {

  /**
   * observable - only an action can change it, and it will trigger new rendering for everyone who's watching the store.
   **/
  @observable
  public user: IUser;

  @observable
  public followers: IFollower[];

  @observable
  public cursor: number;

  constructor(user, cursor) {
    this.user = user;
    this.cursor = cursor;
  }

  /**
   * action - a function that changes an observable, can be called from any component that have the store injected.
   **/
  @action
  public setUser(user: IUser) {
    this.user = user;
  }

  @action
  public setCursor(newCursor: number) {
    this.cursor = newCursor;
  }

  @action
  public sortFollowersByName() {
    this.followers = this.followers.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.name > follower2.name ? 1 : -1);
  }

  @action
  public sortFollowersByScreenName() {
    this.followers = this.followers.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.screenName > follower2.screenName ? 1 : -1);
  }

  @action
  public loadFollowers() {
    fetchFollowers(this.user.screenName, this.cursor).then(response => {
      const {data} = response;
      if (data.followers) {
        this.cursor === -1 ? this.setFollowers(data.followers) : this.addFollowers(data.followers.slice(1));
        this.setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  @action
  private setFollowers(followers: IFollower[]) {
    this.followers = followers;
  }

  @action
  private addFollowers(followers: IFollower[]) {
    this.followers = [...this.followers, ...followers];
  }
}
