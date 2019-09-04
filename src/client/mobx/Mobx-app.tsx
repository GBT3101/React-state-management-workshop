import * as React from 'react';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import {MobxAppStore} from './mobx-app-store';
import {Provider} from 'mobx-react';

export const MobxApp = () => {
  const emptyUser = {
    description: '',
    imageSrc: '',
    location: '',
    name: '',
    numOfFollowers: 0,
    screenName: '',
    url: ''
  };
  const firstCursor = -1;
  // Initializing the store with our initial state, and then injecting it as a provider to the rest of our app.
  const mobxAppStore = new MobxAppStore(emptyUser, firstCursor);

  return (
    <Provider mobxAppStore={mobxAppStore}>
      <div>
        <StalkForm/>
        <FollowerList/>
        <div>* Powered by Mobx *</div>
      </div>
    </Provider>
  );
};
