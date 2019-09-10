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
    case Actions.initFollowers:
      return action.payload;
    case Actions.sortByName:
      return sortByName(state);
    case Actions.sortByScreenName:
      return sortByScreenName(state);
    default:
      return state;
  }
};

const sortByName = followers => {
  return followers.slice().sort((followersA, followersB) => {
    if (followersA.name > followersB.name) {
      return 1;
    }
    if (followersB.name > followersA.name) {
      return -1;
    }
    return 0;
  });
};

const sortByScreenName = followers => {
  return followers.slice().sort((followersA, followersB) => {
    if (followersA.screenName > followersB.screenName) {
      return 1;
    }
    if (followersB.screenName > followersA.screenName) {
      return -1;
    }
    return 0;
  });
};

export const HooksApp = () => {
  /*
      ~~~~~ 2. YOUR CODE HERE ~~~~~~
      its time to use the reducer
      Initialising the reducer with an empty follower list, dispatch is a function that used in order to trigger the reducer with an action.
      also implement a simple "use state" hook for the user.
      *** CHANGE the default assignments below to a real React Hooks! ***
   */
  const [followers, dispatch] = useReducer(reducer, []);
  const [user, setUser] = useState({});

  return (
    <div>
      <StalkForm setUser={setUser} sort={dispatch}/>
      <FollowerList user={user} followers={followers} updateFollowers={dispatch}/>
      <div>* Powered by React Hooks *</div>
    </div>
  );
};
