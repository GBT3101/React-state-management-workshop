import * as React from 'react';
import { Link } from 'react-router-dom';
const css = require('../../styles/follower-list.css');
import InfiniteScroll from 'react-infinite-scroller';
import {inject, observer} from 'mobx-react';
import {useEffect} from 'react';

function Follower({follower}) {
  return (
    <div className={`${css.followerContainer} ${follower.id === 'loader' ? css.followerLoader : ''}`}>
      <div className={css.imageContainer}>
        <img className={css.followerImage} src={follower.imageSrc}/>
      </div>
      <div className={css.detailsContainer}>
        <a className={css.followerName} href={follower.url} target='_blank'>{`${follower.screenName} - ${follower.name}`}</a>
        <p className={css.followerDescription}>{follower.description}</p>
      </div>
    </div>
  );
}

function User({user}) {
  return (
    <div className={css.userContainer}>
      <div className={css.userImageContainer}>
        <img className={css.followerImage} src={user.imageSrc}/>
      </div>
      <a className={css.followerName} href={user.url}
         target='_blank'>{`@${user.screenName} - ${user.name}`}</a>
      {user.location && <p>Lives in: {user.location}</p>}
      <p>Number of Followers: {user.numOfFollowers}</p>
      <p>{user.description}</p>
    </div>
  );
}

/*
    7. YOUR CODE HERE
    Inject the store on the component.
    Define the component as Observer.
    hint: imports are already here, you don't need anything else.
 */

export const FollowerList = inject('store')(observer(props => {
  const { store } = props;
  const loadingFollower = {
      id: 'loader',
      name: '',
      screenName: '',
      description: 'Loading More Followers...',
      imageSrc: './assets/followerLoading.gif',
      url: '' };

  /*
     8. YOUR CODE HERE
     Below all the functions and variables needed for this component to work, define each one using mobxAppStore:
     Just to be clear, every const below should have a setup from the mobxAppStore.
   */

  const followers = store.followers; // access to the props like this? without getters?
  const user = store.user;
  const cursor = store.cursor;
  const setCursor = newCursor => store.setCursor(newCursor);
  const loadFollowers = () => store.loadFollowers();

  // UNTIL HERE

  useEffect(() => {
    if (user.screenName) {
      // reset followers and cursor
      setCursor(-1);
      loadFollowers();
    }
  }, [user.screenName]);

  return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { user.name && <User user={user} /> }
        {followers && followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => followers.length >= 30 && loadFollowers()}
          hasMore={cursor !== 0}
          loader={<Follower key={loadingFollower.id} follower={loadingFollower}/>}
        >
          {followers.map(follower => <Follower key={follower.id} follower={follower}/>)}
        </InfiniteScroll> : null}
      </div>
    );

}));
export default FollowerList;
