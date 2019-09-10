import {IFollower} from '../../shared/follower';
import {combineReducers} from 'redux';
import {Actions} from './actions';

/*
  2. YOUR CODE HERE
  Define the reducers, first one is free.
 */
const defaultUser = {
  description: '',
  imageSrc: '',
  location: '',
  name: '',
  numOfFollowers: 0,
  screenName: '',
  url: ''
}
const user = (state = defaultUser, action) => {
  switch (action.type) {
    case Actions.setUser:
      return action.payload;
    default:
      return state;
  }
};

const followers = (state = [] , action) => {
  switch (action.type) {
    case Actions.initFollowers:
      return action.payload;
    case Actions.addFollowers:
      return [...state, ...action.payload];
    case Actions.sortByName:
      return sortByName(state);
    case Actions.sortByScreenName:
      return sortByScreenName(state);
    default:
      return state;
  }
};

const cursor = (state = -1 , action) => {
  switch (action.type) {
    case Actions.setCursor:
      return action.payload;
    default:
      return state;
  }
};

const sortByName = state => {
  return state.slice().sort((followersA, followersB) => {
    if (followersA.name > followersB.name) {
      return 1;
    }
    if (followersB.name > followersA.name) {
      return -1;
    }
    return 0;
  });
};

const sortByScreenName = state => {
  return state.slice().sort((followersA, followersB) => {
    if (followersA.screenName > followersB.screenName) {
      return 1;
    }
    if (followersB.screenName > followersA.screenName) {
      return -1;
    }
    return 0;
  });
};

/*
  3. YOUR CODE HERE
  Combine your reducers and export it as 'reducers'.
 */
export const reducers = combineReducers({
  user,
  followers,
  cursor
});