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
        ~~~~~ 1. YOUR CODE HERE ~~~~~
        define a case for each action
     */
    default:
      return state;
  }
};

export const HooksApp = () => {
  /*
      ~~~~~ 2. YOUR CODE HERE ~~~~~~
      its time to use the reducer
      Initialising the reducer with an empty follower list, dispatch is a function that used in order to trigger the reducer with an action.
      also implement a simple "use state" hook for the user.
      *** CHANGE the default assignments below to a real React Hooks! ***
   */
  const [followers, dispatch] = [[], null]; // HERE
  const [user, setUser] = [{}, null]; // HERE

  return (
    <div>
      <StalkForm setUser={setUser} sort={dispatch}/>
      <FollowerList user={user} followers={followers} updateFollowers={dispatch}/>
      <div>* Powered by React Hooks *</div>
    </div>
  );
};
