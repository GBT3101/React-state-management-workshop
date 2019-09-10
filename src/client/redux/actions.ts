export enum Actions {
  sortByName = 'sortByName',
  sortByScreenName = 'sortByScreenName',
  addFollowers = 'addFollowers',
  initFollowers = 'initFollowers',
  setFollowersBatchIndex = 'setFollowersBatchIndex',
  setUser = 'setUser',
}

/*
  1. SOLUTION
  Define an action for each action type (first one is free)
 */

export const sortFollowersByName = () => ({
  type: Actions.sortByName,
});

export const sortFollowersByScreenName = () => ({
  type: Actions.sortByScreenName,
});

export const addFollowers = newFollowers => ({
  type: Actions.addFollowers,
  followers: newFollowers,
});

export const initFollowers = firstFollowers => ({
  type: Actions.initFollowers,
  followers: firstFollowers,
});

export const setFollowersBatchIndex = newFollowersBatchIndex => ({
  type: Actions.setFollowersBatchIndex,
  followersBatchIndex: newFollowersBatchIndex,
});

export const setUser = newUser => ({
  type: Actions.setUser,
  user: newUser,
});
