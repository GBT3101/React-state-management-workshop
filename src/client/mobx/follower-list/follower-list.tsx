import * as React from 'react';
import { Link } from 'react-router-dom';
const css = require('../../styles/follower-list.css');
import InfiniteScroll from 'react-infinite-scroller';
import {fetchFollowers} from '../../utils/api-facade';

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

function FollowerList({user, followers, updateFollowers}) {
  const cursor = -1;
  const setCursor = newCursor => console.log(newCursor);
  const loadingFollower = {
      id: 'loader',
      name: '',
      screenName: '',
      description: 'Loading More Followers...',
      imageSrc: './assets/followerLoading.gif',
      url: '' };

  function loadFirstFollowers(userScreenName) {
    fetchFollowers(userScreenName).then(response => {
      const { data } = response;
      if (data.followers) {
        updateFollowers(); // should init followers
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
        updateFollowers(); // should add new followers
        setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  if (user.screenName) {
    loadFirstFollowers(user.screenName);
  }

  return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { user.name && <User user={user} /> }
        {followers && followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => followers.length >= 30 && loadMoreFollowers(user.screenName)}
          hasMore={false/*cursor !== 0*/}
          loader={<Follower key={loadingFollower.id} follower={loadingFollower}/>}
        >
          {followers.map(follower => <Follower key={follower.id} follower={follower}/>)}
        </InfiniteScroll> : null}
      </div>
    );
  }

export default FollowerList;
