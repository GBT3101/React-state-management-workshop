import {IFollower} from '../../shared/follower';
import {combineReducers} from 'redux';
import {Actions} from './actions';

/*
  2. SOLUTION
  Define the reducers, first one is free.
 */
const initialUser = {
  description: '',
  imageSrc: '',
  location: '',
  name: '',
  numOfFollowers: 0,
  screenName: '',
  url: ''
};

// HINT - use those initial values in your reducers
const initialFollowers = [];
const initialFollowersBatchIndex = -1;

const user = (state = initialUser, action) => {
  switch (action.type) {
    case Actions.setUser:
      return action.payload;
    default:
      return state;
  }
};

const followers = (state = initialFollowers, action) => {
  switch (action.type) {
    case Actions.sortByName:
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.name > follower2.name ? 1 : -1);
    case Actions.sortByScreenName:
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.screenName > follower2.screenName ? 1 : -1);
    case Actions.addFollowers:
      return [...state, ...action.payload];
    case Actions.initFollowers:
      return action.payload;
    default:
      return state;
  }
};

const followersBatchIndex = (state = initialFollowersBatchIndex, action) => {
  switch (action.type) {
    case Actions.setFollowersBatchIndex:
      return action.payload;
    default:
      return state;
  }
};

// UNTIL HERE

/*
  3. SOLUTION
  Combine your reducers and export it as 'reducers'.
 */
export const reducers = combineReducers({
  followers,
  followersBatchIndex,
  user,
});
