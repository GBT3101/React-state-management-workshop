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


  // UNTIL HERE
  @observable
  public followersBatchIndex: number;

  constructor(user, followersBatchIndex) {
    /*
      2. YOUR CODE HERE
      set the initial state of your observables.
     */

    // UNTIL HERE
  }

  /**
   * action - a function that changes an observable, can be called from any component that have the store injected.
   **/

  /*
      3. YOUR CODE HERE
      Define the actions you need: (first one is free!)
     */

  @action
  public setFollowersBatchIndex(newFollowersBatchIndex: number) {
    this.followersBatchIndex = newFollowersBatchIndex;
  }

  // @action -- todo: we don't want you to waste time on complex actions, so you can uncomment this one once you created the other needed actions.
  // public loadFollowers() {
  //   fetchFollowers(this.user.screenName, this.followersBatchIndex).then(response => {
  //     const {data} = response;
  //     if (data.followers) {
  //       this.followersBatchIndex === -1 ? this.setFollowers(data.followers) : this.addFollowers(data.followers.slice(1));
  //       this.setFollowersBatchIndex(data.nextFollowersBatchIndex);
  //     } else {
  //       console.error('Something went wrong, no followers found');
  //       alert('Problematic user, please refresh');
  //     }
  //   });
  // }

  // UNTIL HERE
}
