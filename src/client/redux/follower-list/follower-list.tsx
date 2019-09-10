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

/**
 * @param props - since it gets the props from the connected App, we have all actions and state:
 * E.G props.cursor, props.setCursor, props.initFollowers, props.addFollowers, props.user.
 */
function FollowerList(props) {
  const loadingFollower = {
      id: 'loader',
      name: '',
      screenName: '',
      description: 'Loading More Followers...',
      imageSrc: './assets/followerLoading.gif',
      url: '' };

  function loadFollowers(userScreenName) {
    fetchFollowers(userScreenName, props.cursor).then(response => {
      const { data } = response;
      if (data.followers) {
        // todo - uncomment this 2 lines after you have the state and actions on props.
        props.cursor === -1 ? loadFirstFollowers(data.followers) : loadMoreFollowers(data.followers.slice(1));
        props.setCursor(data.nextCursor);
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }

  function loadFirstFollowers(firstFollowers) {
    // Execute the action to load the first batch of followers.
    /*
      8. YOUR CODE HERE
      init followers here (using props)
     */
    props.initFollowers(firstFollowers);
  }

  function loadMoreFollowers(additionalFollowers) {
    // Execute the action to load additional followers.
    /*
      9. YOUR CODE HERE
      load more followers here (using props)
     */
    props.addFollowers(additionalFollowers);
  }

  /*
      10. YOUR CODE HERE
      just like you did for Mobx, insert the correct values for these 4 consts using your props.
   */

  const followers = props.followers;
  const user = props.user;
  const cursor = props.cursor;
  const setCursor = newCursor => props.setCursor(newCursor);

  // UNTIL HERE

  useEffect(() => {
    if (user.screenName) {
      setCursor(-1);
      loadFollowers(user.screenName);
    }
  }, [user.screenName]);

  return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { user.name && <User user={user} /> }
        {followers && followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => followers.length >= 30 && loadFollowers(user.screenName)}
          hasMore={cursor !== 0}
          loader={<Follower key={loadingFollower.id} follower={loadingFollower}/>}
        >
          {followers.map(follower => <Follower key={follower.id} follower={follower}/>)}
        </InfiniteScroll> : null}
      </div>
    );
  }

export default FollowerList;
