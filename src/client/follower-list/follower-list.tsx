import * as React from 'react';
import { Link } from 'react-router-dom';
import { IFollower } from '../../shared/follower';
const css = require('./follower-list.css');
import InfiniteScroll from 'react-infinite-scroller';
import {fetchFollowers} from '../utils/api-facade';

interface IFollowerListProps {
  firstFollowers: IFollower[];
  userName: string;
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
    console.log('state has been set, ', this.state);
  }

  public render() {
    const { userName } = this.props;
    const { followers } = this.state;

    const renderFollower = user => (
      <div key={user.id} className={`${css.followerContainer} ${user.id === 'loader' ? css.followerLoader : ''}`}>
        <div className={css.imageContainer}>
          <img className={css.followerImage} src={user.imageSrc} />
        </div>
        <div className={css.detailsContainer}>
          <a className={css.followerName} href={user.url} target='_blank'>{user.name}</a>
          <p className={css.followerDescription}>{user.description}</p>
        </div>
      </div>
    );

    const renderFollowers = users => {
      return users.map(renderFollower);
    };

    return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        { userName ? <h3>{`Here are the followers of ${userName}`}</h3> : null}
        {followers && followers.length > 0 ? <InfiniteScroll
          pageStart={0}
          loadMore={() => this.loadMoreFollowers(userName)}
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

  private loadMoreFollowers(userName) {
    fetchFollowers(userName, this.state.cursor).then(response => {
      const { data } = response;
      if (data.followers) {
        this.setState({
          cursor: data.nextCursor,
          followers: [...this.state.followers, ...data.followers.slice(1)]
        });
      } else {
        console.error('Something went wrong, no followers found');
        alert('Problematic user, please refresh page');
      }
    });
  }
}
