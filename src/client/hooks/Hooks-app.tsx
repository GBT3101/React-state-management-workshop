import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import {useReducer, useState} from 'react';
import {IFollower} from '../../shared/follower';
import {Actions} from './reducer-actions.enum';

/**
 * Just like Redux, we have a reducer that takes care of the followers state.
 * Since it's a simple scenario, we can actually create a small local state management system without a store.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.addFollowers: // first case for free, now implement the others!
      return [...state, ...action.payload];
    /*
        ~~~~~ 2. SOLUTION ~~~~~
        define a case for each action
     */
    case Actions.sortByName:
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.name > follower2.name ? 1 : -1);
    case Actions.sortByScreenName:
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.screenName > follower2.screenName ? 1 : -1);
    case Actions.initFollowers:
      return action.payload;
     ////////////// UNTIL HERE ///////////////
    default:
      return state;
  }
};

export const HooksApp = () => {
  /*
      ~~~~~ 2. SOLUTION ~~~~~~
      its time to use the reducer
      Initialising the reducer with an empty follower list, dispatch is a function that used in order to trigger the reducer with an action.
      also implement a simple "use state" hook for the user.
      *** CHANGE the default assignments below to a real React Hooks! ***
   */
  const initialState = [];
  const [followers, dispatch] = useReducer(reducer, initialState); // HERE
  const [user, setUser] = useState({}); // HERE
  const [followersBatchIndex, setFollowersBatchIndex] = useState(-1);

  return (
    <div>
      <StalkForm setUser={setUser} sort={dispatch} setFollowersBatchIndex={setFollowersBatchIndex}/>
      <FollowerList user={user} followersBatchIndex={followersBatchIndex} setFollowersBatchIndex={setFollowersBatchIndex} followers={followers} updateFollowers={dispatch}/>
      <div>* Powered by React Hooks *</div>
    </div>
  );
};
