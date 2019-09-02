import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import {useReducer, useState} from 'react';
import {IFollower} from '../../shared/follower';
import {Actions} from './reducer-actions.enum';

const reducer = (state, action) => {
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

export const HooksApp = () => {
  const initialState = [];
  const [followers, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({});
  return (
    <div>
      <StalkForm setUser={setUser} sort={dispatch}/>
      <FollowerList user={user} followers={followers} updateFollowers={dispatch}/>
      <div>* Powered by React Hooks *</div>
    </div>
  );
};
