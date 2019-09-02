import * as React from 'react';
import { Link } from 'react-router-dom';
const css = require('../../styles/follower-list.css');
import InfiniteScroll from 'react-infinite-scroller';
import { fetchFollowers } from '../../utils/api-facade';
import { useEffect } from 'react';

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

function FollowerList(props) {
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
        props.initFollowers(data.followers);
        props.setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  function loadMoreFollowers(userScreenName) {
    fetchFollowers(userScreenName, props.cursor).then(response => {
      const { data } = response;
      if (data.followers) {
        props.addFollowers(data.followers.slice(1));
        props.setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  useEffect(() => {
    if (props.user.screenName) {
      loadFirstFollowers(props.user.screenName);
    }
  }, [props.user.screenName]);

  return (
      <div className={`${css.root} ${props.followers ? css.visible : css.hidden}`}>
        { props.user.name && <User user={props.user} /> }
        {props.followers && props.followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => props.followers.length >= 30 && loadMoreFollowers(props.user.screenName)}
          hasMore={props.cursor !== 0}
          loader={<Follower key={loadingFollower.id} follower={loadingFollower}/>}
        >
          {props.followers.map(follower => <Follower key={follower.id} follower={follower}/>)}
        </InfiniteScroll> : null}
      </div>
    );
  }

export default FollowerList;
