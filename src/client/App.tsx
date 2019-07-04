import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StalkForm} from './stalk-form/stalk-form';

const AppImpl = () => (
  <BrowserRouter>
    <div>
      <StalkForm />
    </div>
  </BrowserRouter>
);

export const App = hot(module)(AppImpl);
