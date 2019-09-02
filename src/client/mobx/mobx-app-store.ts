import {action, observable} from 'mobx';
import {IUser} from '../../shared/user';
import {IFollower} from '../../shared/follower';
import {fetchFollowers} from '../utils/api-facade';

export class MobxAppStore {

  constructor(user, cursor) {
    this.user = user;
    this.cursor = cursor;
  }

  @observable
  public user: IUser;

  @observable
  public followers: IFollower[];

  @observable
  public cursor: number;

  @action
  public setUser(user: IUser) {
    console.log('set user: ', user);
    this.user = user;
  }

  @action
  public setCursor(newCursor: number) {
    console.log('new cursor: ', newCursor);
    this.cursor = newCursor;
  }

  @action
  public setFollowers(followers: IFollower[]) {
    this.followers = followers;
  }

  @action
  public addFollowers(followers: IFollower[]) {
    this.followers = [...this.followers, ...followers];
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
  public loadMoreFollowers() {
    fetchFollowers(this.user.screenName, this.cursor).then(response => {
      const { data } = response;
      if (data.followers) {
        this.addFollowers(data.followers.slice(1));
        this.setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  @action
  public loadFirstFollowers() {
    fetchFollowers(this.user.screenName).then(response => {
      const { data } = response;
      if (data.followers) {
        this.setFollowers(data.followers);
        this.setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }
}
