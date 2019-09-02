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

const FollowerList = inject('mobxAppStore')(observer(props => {
  const { mobxAppStore } = props;
  const loadingFollower = {
      id: 'loader',
      name: '',
      screenName: '',
      description: 'Loading More Followers...',
      imageSrc: './assets/followerLoading.gif',
      url: '' };

  useEffect(() => {
    if (mobxAppStore.user.screenName) {
      mobxAppStore.loadFirstFollowers(mobxAppStore.user.screenName);
    }
  }, [mobxAppStore.user.screenName]);

  return (
      <div className={`${css.root} ${mobxAppStore.followers ? css.visible : css.hidden}`}>
        { mobxAppStore.user.name && <User user={mobxAppStore.user} /> }
        {mobxAppStore.followers && mobxAppStore.followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => mobxAppStore.followers.length >= 30 && mobxAppStore.loadMoreFollowers(mobxAppStore.user.screenName)}
          hasMore={mobxAppStore.cursor !== 0}
          loader={<Follower key={loadingFollower.id} follower={loadingFollower}/>}
        >
          {mobxAppStore.followers.map(follower => <Follower key={follower.id} follower={follower}/>)}
        </InfiniteScroll> : null}
      </div>
    );
  }));

export default FollowerList;
