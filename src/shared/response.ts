import {IFollower} from './follower';

export interface ITwitterFollowerListResponse {
  data: {
    followers: IFollower[],
    nextFollowersBatchIndex: number;
  };
}
