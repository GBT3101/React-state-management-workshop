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

  const appStore = new MobxAppStore(emptyUser, firstCursor); // why a class? why not init inside the store?
  /*
      5. YOUR CODE HERE
      create your store and provide it using Mobx Provider
      Hint: imports are already here, you don't need anything else.
   */

  // have to be store??
  return (
    <div>
      <Provider store={appStore}>
        <StalkForm/>
        <FollowerList/>
      </Provider>
      <div>* Powered by Mobx *</div>
    </div>
  );
};
