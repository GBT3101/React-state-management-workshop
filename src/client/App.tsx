import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import {useReducer, useState} from 'react';
import {IFollower} from '../shared/follower';

const reducer = (state, action) => {
  switch (action.type) {
    case 'sortByName':
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.name[0] > follower2.name[0] ? 1 : -1);
    case 'sortByScreenName':
      return state.slice().sort((follower1: IFollower, follower2: IFollower) => follower1.screenName[0] > follower2.screenName[0] ? 1 : -1);
    case 'addFollowers':
      return [...state, ...action.payload];
    case 'initFollowers':
      return action.payload;
    default:
      return state;
  }
};

const AppImpl = () => {
  const initialState = [];
  const [followers, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <div>
        <StalkForm setUser={setUser} sort={dispatch}/>
        <FollowerList user={user} followers={followers} updateFollowers={dispatch}/>
      </div>
    </BrowserRouter>
  );
};

export const App = hot(module)(AppImpl);
