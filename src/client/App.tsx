import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StalkForm} from './stalk-form/stalk-form';
import {FollowerList} from './follower-list/follower-list';
import {mockedFollowersResponse, mockedUserName} from '../shared/mocks';

const AppImpl = () => (
  <BrowserRouter>
    <div>
      <StalkForm />
      <FollowerList userName={mockedUserName} firstFollowers={mockedFollowersResponse.followers} firstCursor={mockedFollowersResponse.nextCursor} />
    </div>
  </BrowserRouter>
);

export const App = hot(module)(AppImpl);
