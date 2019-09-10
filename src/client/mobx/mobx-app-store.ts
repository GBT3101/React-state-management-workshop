import {action, observable} from 'mobx';
import {IUser} from '../../shared/user';
import {IFollower} from '../../shared/follower';
import {fetchFollowers} from '../utils/api-facade';

export class MobxAppStore {

  /**
   * observable - only an action can change it, and it will trigger new rendering for everyone who's watching the store.
  **/

  /*
      1. YOUR CODE HERE
      define the observables you need: (first one is free!)
   */

  @observable
  public cursor: number;
  @observable
  public user: any; // IUser;
  @observable
  public followers: IFollower[] = []; // ?

  constructor(user, cursor) { // why not getting the followers as well
    /*
      2. YOUR CODE HERE
      set the initial state of your observables.
     */
    this.cursor = cursor;
    this.user = user;
  }

  /**
   * action - a function that changes an observable, can be called from any component that have the store injected.
  **/
  /*
      3. YOUR CODE HERE
      Define the actions you need: (first one is free!)
     */

  @action
  public setCursor(newCursor: number) {
    this.cursor = newCursor;
  }

  @action
  public setFollowers(followers) { // does it need to bbe an action even if no one call it outside? No?
    this.followers = followers;
  }

  @action
  public addFollowers(followers) { // does it need to be an action even if no one call it outside?? No?
    this.followers = [...this.followers, ...followers];
  }

  @action
  public setUser(user) {
    this.user = user;
  }

  @action
  public sortByName() {
    this.followers = this.followers.slice().sort((followersA, followersB) => {
      if (followersA.name > followersB.name) {
        return 1;
      }
      if (followersB.name > followersA.name) {
        return -1;
      }
      return 0;
    });
  }

  @action
  public sortByScreenName() {
    this.followers = this.followers.slice().sort((followersA, followersB) => {
      if (followersA.screenName > followersB.screenName) {
        return 1;
      }
      if (followersB.screenName > followersA.screenName) {
        return -1;
      }
      return 0;
    });
  }

  // why this is an action and it is here?? Yes? This what set the new observable value or maybe it is enought to put as observable - setFollowers & addFollowers
  @action // -- todo: we don't want you to waste time on complex actions, so you can uncomment this one once you created the other needed actions.
  public loadFollowers() {  // why is this an action? what about the user actions? fetch user?
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
}
