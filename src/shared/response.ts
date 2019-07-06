import {IFollower} from './follower';

export interface ITwitterFollowerListResponse {
  data: {
    followers: IFollower[],
    nextCursor: number;
  };
}
