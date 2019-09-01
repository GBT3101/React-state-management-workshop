import * as React from 'react';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';

export const ReduxApp = () => {
  const initialState = [];
  const followers = [];
  const user = {};
  const setUser = () => null;
  const dispatch = () => null;
  return (
    <div>
      <StalkForm setUser={setUser} sort={dispatch}/>
      <FollowerList user={user} followers={followers} updateFollowers={dispatch}/>
      <div>* Powered by Redux *</div>
    </div>
  );
};
