import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HooksApp } from './hooks/Hooks-app';
import { useState } from 'react';
import { ReduxApp } from './redux/Redux-app';
import { MobxApp } from './mobx/Mobx-app';
const css = require('./styles/menu.css');

enum AppState {
  REDUX = 'redux',
  MOBX = 'mobx',
  HOOKS = 'hooks',
}

const AppImpl = () => {
  const [appState, setAppState] = useState(AppState.REDUX);
  function renderAppType(stateManagementType: AppState) {
    setAppState(stateManagementType);
  }

  return (
    <BrowserRouter>
      <div>
        <div className={css.menuTabs}>
          <button className={appState === AppState.HOOKS ? css.selected : ''} onClick={() => renderAppType(AppState.HOOKS)}>React Hooks</button>
          <button className={appState === AppState.REDUX ? css.selected : ''} onClick={() => renderAppType(AppState.REDUX)}>Redux</button>
          <button className={appState === AppState.MOBX ? css.selected : ''} onClick={() => renderAppType(AppState.MOBX)}>Mobx</button>
        </div>
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
