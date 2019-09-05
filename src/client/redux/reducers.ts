import {IFollower} from '../../shared/follower';
import {combineReducers} from 'redux';
import {Actions} from './actions';

/*
  2. YOUR CODE HERE
  Define the reducers, first one is free.
 */

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

// const followers =

// const cursor =

// UNTIL HERE

/*
  3. YOUR CODE HERE
  Combine your reducers and export it as 'reducers'.
 */
export const reducers = () => null;
