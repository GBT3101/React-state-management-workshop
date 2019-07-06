import * as React from 'react';
import { Link } from 'react-router-dom';
import { IFollower } from '../../shared/follower';
const css = require('./follower-list.css');
import InfiniteScroll from 'react-infinite-scroller';
import {fetchFollowers} from '../utils/api-facade';
import {IUser} from '../../shared/user';

interface IFollowerListProps {
  firstFollowers: IFollower[];
  user: IUser;
  firstCursor: number;
}

interface IFollowerListState {
  cursor: number;
  followers: IFollower[];
}

export class FollowerList extends React.Component<IFollowerListProps, IFollowerListState> {

  constructor(props) {
    super(props);
    this.state = {
      cursor: this.props.firstCursor,
      followers: this.props.firstFollowers
    };
  }

  public render() {
    const { user } = this.props;
    const { followers } = this.state;

    const renderFollower = follower => (
      <div key={follower.id} className={`${css.followerContainer} ${follower.id === 'loader' ? css.followerLoader : ''}`}>
        <div className={css.imageContainer}>
          <img className={css.followerImage} src={follower.imageSrc} />
        </div>
        <div className={css.detailsContainer}>
          <a className={css.followerName} href={follower.url} target='_blank'>{follower.name}</a>
          <p className={css.followerDescription}>{follower.description}</p>
        </div>
      </div>
    );

    const renderUser = userToRender => (
      <div className={css.userContainer}>
          <div className={css.userImageContainer}>
            <img className={css.followerImage} src={userToRender.imageSrc} />
          </div>
          <a className={css.followerName} href={userToRender.url} target='_blank'>{`@${userToRender.screenName} - ${userToRender.name}`}</a>
        <p>Lives in: {userToRender.location}</p>
        <p>Number of Followers: {userToRender.numOfFollowers}</p>
        <p>{userToRender.description}</p>
      </div>
    );

    const renderFollowers = users => {
      return users.map(renderFollower);
    };

    return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { user ? renderUser(user) : null}
        {followers && followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => this.loadMoreFollowers(user.screenName)}
          hasMore={this.state.cursor !== 0}
          loader={
            renderFollower({
            id: 'loader',
            name: '',
            description: 'Loading More Followers...',
            imageSrc: './assets/followerLoading.gif',
            url: '' })}
        >
          {renderFollowers(followers)}
        </InfiniteScroll> : null}
      </div>
    );
  }

  private loadMoreFollowers(userScreenName) {
    fetchFollowers(userScreenName, this.state.cursor).then(response => {
      const { data } = response;
      if (data.followers) {
        this.setState({
          cursor: data.nextCursor,
          followers: [...this.state.followers, ...data.followers.slice(1)]
        });
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh');
      }
    });
  }
}
