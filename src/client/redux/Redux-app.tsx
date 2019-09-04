import * as React from 'react';
import {StalkForm} from './stalk-form/stalk-form';
import FollowerList from './follower-list/follower-list';
import { Provider } from 'react-redux';
import { store } from './redux-app-store';
import { connect } from 'react-redux';
import {
  addFollowers,
  initFollowers,
  setCursor,
  setUser,
  sortFollowersByName,
  sortFollowersByScreenName
} from './actions';

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
  followers: state.followers,
  user: state.user,
  cursor: state.cursor,
});

// Instead of the old "dispatch" method, with ", mapDispatchToProps you get the actions as a function.
const mapDispatchToProps = {
  sortFollowersByName,
  sortFollowersByScreenName,
  addFollowers,
  initFollowers,
  setCursor,
  setUser,
};

// finally, the app is connected with the "new" props. (which are the general state and the reducer actions).
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};
