import * as React from 'react';
import { Link } from 'react-router-dom';

export class FollowerList extends React.Component<any> {

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
      <div>
        {followers ? renderFollowers(followers) : null}
      </div>
    );
  }
}
