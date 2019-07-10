import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const css = require('./follower-list.css');
import InfiniteScroll from 'react-infinite-scroller';
import {fetchFollowers} from '../utils/api-facade';

function Follower({follower}) {
  return (
    <div className={`${css.followerContainer} ${follower.id === 'loader' ? css.followerLoader : ''}`}>
      <div className={css.imageContainer}>
        <img className={css.followerImage} src={follower.imageSrc}/>
      </div>
      <div className={css.detailsContainer}>
        <a className={css.followerName} href={follower.url} target='_blank'>{follower.name}</a>
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

function FollowerList({user}) {
  const [followers, setFollowers] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const loadingFollower = {
      id: 'loader',
      name: '',
      description: 'Loading More Followers...',
      imageSrc: './assets/followerLoading.gif',
      url: '' };

  function loadFirstFollowers(userScreenName) {
    fetchFollowers(userScreenName).then(response => {
      const { data } = response;
      if (data.followers) {
        setFollowers(data.followers);
        setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  function loadMoreFollowers(userScreenName) {
    fetchFollowers(userScreenName, cursor).then(response => {
      const { data } = response;
      if (data.followers) {
        setFollowers([...followers, ...data.followers.slice(1)]);
        setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  useEffect(() => {
    if (user.screenName) {
      loadFirstFollowers(user.screenName);
    }
  }, [user.screenName]);

  return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { user.name && <User user={user} /> }
        {followers && followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => followers.length >= 30 && loadMoreFollowers(user.screenName)}
          hasMore={cursor !== 0}
          loader={<Follower key={loadingFollower.id} follower={loadingFollower}/>}
        >
          {followers.map(follower => <Follower key={follower.id} follower={follower}/>)}
        </InfiniteScroll> : null}
      </div>
    );
  }

export default FollowerList;
