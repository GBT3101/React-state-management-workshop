import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {HooksApp} from './hooks/Hooks-app';
import {useState} from 'react';
import {ReduxApp} from './redux/Redux-app';
import {MobxApp} from './mobx/Mobx-app';

enum AppState {
  REDUX = 'redux',
  MOBX = 'mobx',
  HOOKS = 'hooks',
}

const AppImpl = () => {
  const [appState, setAppState] = useState('');
  function renderAppType(stateManagementType: AppState) {
    setAppState(stateManagementType);
  }

  return (
    <BrowserRouter>
      <div>
        <button onClick={() => renderAppType(AppState.REDUX)}>Redux</button>
        <button onClick={() => renderAppType(AppState.MOBX)}>Mobx</button>
        <button onClick={() => renderAppType(AppState.HOOKS)}>React Hooks</button>
        <div>
          {appState === AppState.HOOKS ? <HooksApp/> :
            appState === AppState.REDUX ? <ReduxApp/> :
              appState === AppState.MOBX ? <MobxApp/> : ``}
        </div>
      </div>
    </BrowserRouter>
  );
};

export const App = hot(module)(AppImpl);
