export enum Actions {
  sortByName = 'sortByName',
  sortByScreenName = 'sortByScreenName',
  addFollowers = 'addFollowers',
  initFollowers = 'initFollowers',
  setCursor = 'setCursor',
  setUser = 'setUser',
}

/*
  1. YOUR CODE HERE
  Define an action for each action type (first one is free)
 */

export const addFollowers = newFollowers => ({
  type: Actions.addFollowers,
  payload: newFollowers,
});

export const initFollowers = followers => ({
  type: Actions.initFollowers,
  payload: followers,
});

export const setUser = user => ({
  type: Actions.setUser,
  payload: user,
});

export const setCursor = cursor => ({
  type: Actions.setCursor,
  payload: cursor,
});

export const sortFollowersByName = () => ({
  type: Actions.sortByName
});

export const sortFollowersByScreenName = () => ({
  type: Actions.sortByScreenName
});
