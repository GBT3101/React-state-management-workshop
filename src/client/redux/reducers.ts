import {IFollower} from '../../shared/follower';
import {combineReducers} from 'redux';
import {Actions} from './actions';

/*
  2. YOUR CODE HERE
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

// const followers =

// const followersBatchIndex =

// UNTIL HERE

/*
  3. YOUR CODE HERE
  Combine your reducers and export it as 'reducers'.
 */
export const reducers = () => null;
