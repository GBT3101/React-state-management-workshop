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

const mapStateToProps = state => ({
  followers: state.followers,
  user: state.user,
  cursor: state.cursor,
});

const mapDispatchToProps = {
  sortFollowersByName,
  sortFollowersByScreenName,
  addFollowers,
  initFollowers,
  setCursor,
  setUser,
};

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
