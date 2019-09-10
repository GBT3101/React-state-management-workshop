import {IFollower} from './follower';

/**
 * ITwitterFollowerListResponse - the representation of the followers list data in the UI components
 * @nextFollowersBatchIndex - Cursoring separates results into pages
 * and provides a means to move backwards and forwards through these pages.
 */
export interface ITwitterFollowerListResponse {
  data: {
    followers: IFollower[],
    nextFollowersBatchIndex: number;
  };
}
