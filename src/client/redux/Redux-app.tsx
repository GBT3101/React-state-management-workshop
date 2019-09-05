import * as React from 'react';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import { Provider } from 'react-redux';
import { store } from './redux-app-store';
import { connect } from 'react-redux';
import {
  addFollowers,
  // initFollowers,
  // setCursor,
  // setUser,
  // sortFollowersByName,
  // sortFollowersByScreenName
} from './actions'; // todo - uncomment after finishing task 1.

const App = props => {
  return (
    <div>
      <StalkForm {...props} />
      <FollowerList {...props} />
      <div>* Powered by Redux *</div>
    </div>);
};

// Map the general state to be props of every component that's connected with the store.
const mapStateToProps = state => ({
  /*
    4. YOUR CODE HERE
    map your state to App props.
   */
});

// Instead of the old "dispatch" method, with ", mapDispatchToProps you get the actions as a function.
const mapDispatchToProps = {
  /*
    5. YOUR CODE HERE
    map your dispatched actions to props.
   */
};

// finally, the app is connected with the "new" props. (which are the general state and the reducer actions).

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// Note - the store is provided, just like in Mobx.
export const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};
