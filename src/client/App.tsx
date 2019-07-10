import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import {useState} from 'react';

const AppImpl = () => {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <div>
        <StalkForm setUser={setUser}/>
        <FollowerList user={user}/>
      </div>
    </BrowserRouter>
  );
};

export const App = hot(module)(AppImpl);
