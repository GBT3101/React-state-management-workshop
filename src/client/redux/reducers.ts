import {IFollower} from '../../shared/follower';
import {combineReducers} from 'redux';
import {Actions} from './actions';

const followers = (state = [], action) => {
  switch (action.type) {
    case Actions.sortByName:
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.name > follower2.name ? 1 : -1);
    case Actions.sortByScreenName:
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.screenName > follower2.screenName ? 1 : -1);
    case Actions.addFollowers:
      return [...state, ...action.followers];
    case Actions.initFollowers:
      return action.followers;
    default:
      return state;
  }
};

const cursor = (state = -1, action) => {
  switch (action.type) {
    case Actions.setCursor:
      return action.cursor;
    default:
      return state;
  }
};

const user = (state = {
  description: '',
  imageSrc: '',
  location: '',
  name: '',
  numOfFollowers: 0,
  screenName: '',
  url: ''
},            action) => {
  switch (action.type) {
    case Actions.setUser:
      return action.user;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  followers,
  cursor,
  user,
});
