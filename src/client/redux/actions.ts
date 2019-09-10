export enum Actions {
  sortByName = 'sortByName',
  sortByScreenName = 'sortByScreenName',
  addFollowers = 'addFollowers',
  initFollowers = 'initFollowers',
  setFollowersBatchIndex = 'setFollowersBatchIndex',
  setUser = 'setUser',
}

/*
  1. YOUR CODE HERE
  Define an action for each action type (first one is free)
 */

export const addFollowers = newFollowers => ({
  type: Actions.addFollowers,
  followers: newFollowers,
});
