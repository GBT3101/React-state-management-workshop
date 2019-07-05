import * as React from 'react';
import { Link } from 'react-router-dom';
import {IFollower} from '../../shared/follower';
const css = require('./follower-list.css');

interface IFollowerListProps {
  followers: IFollower[];
}

export class FollowerList extends React.Component<IFollowerListProps> {

  public render() {
    const { followers } = this.props;

    const renderUser = user => (
      <div>
        {user.name}
      </div>
    );

    const renderFollowers = users => {
      return users.map(user => renderUser(user));
    };

    return (
      <div className={`${css.root} ${followers ? css.visible : css.hidden}`}>
        {followers ? renderFollowers(followers) : null}
      </div>
    );
  }
}
