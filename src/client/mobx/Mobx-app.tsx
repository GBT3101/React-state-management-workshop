import * as React from 'react';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import {MobxAppStore} from './mobx-app-store';
import {Provider} from 'mobx-react';

export const MobxApp = () => {
  const initialUser = {
    description: '',
    imageSrc: '',
    location: '',
    name: '',
    numOfFollowers: 0,
    screenName: '',
    url: ''
  };
  const initialFirstFollowersBatchIndex = -1;
  /*
      4. YOUR CODE HERE
      create your store and provide it using Mobx Provider
      Hint: imports are already here, you don't need anything else.
   */

  return (
    <div>
      <StalkForm/>
      <FollowerList/>
      <div>* Powered by Mobx *</div>
    </div>
  );

  // UNTIL HERE
};
